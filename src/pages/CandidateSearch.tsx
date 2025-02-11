import { useState, useEffect } from 'react';
//import { searchGithub, searchGithubUser } from '../api/API';
import { ICandidate, ICandidateList } from '../interfaces/CandidateInterface';
import { IoCloseCircle, IoAddCircle } from 'react-icons/io5';

const CandidateSearch = () => {
  const [logins, setLogins] = useState<string[]>([]); // Array of usernames
  const [candidate, setCandidate] = useState<ICandidate | null>(null); // This is the candidate object
  const [isLoading, setIsLoading] = useState<boolean>(false); // Bool for loading state conditional formatting
  const [storedCands, setStored] = useState<ICandidate[]>([]); // This is the array of candidate objects that goes into localStorage

  // Function to get the array of logins
  const fetchLogins = async () => {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    const data: ICandidateList[] = await response.json();
    const loginsList = data.map(user => user.login);
    setLogins(loginsList);
  };

  // Function to get the user object data
  const fetchUser = async (username: string) => {
    try {
      setIsLoading(true); // Set loading to true for conditional formatting
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });
      const data: ICandidate = await response.json();
      if (data.name && data.location && data.bio) { // Check for required fields (reasonable compromise)
        setCandidate(data);
      } else {
        handleNext(); // Skip if missing fields
      }
    } catch (err) {
      console.error('Error fetching user:', err);
      handleNext(); // Need this
    } finally {
      setIsLoading(false); // Stops the loading formatting
    }
  };

  // Initial load of logins
  useEffect(() => {
    fetchLogins();
    const stored = localStorage.getItem('storedCandidates');
    if (stored) {
      setStored(JSON.parse(stored));
    }
  }, []);

  // Update candidate whenever logins changes
  useEffect(() => {
    if (logins.length > 0) {
      fetchUser(logins[0]);
    } else {
      // Refresh logins when we run out
      fetchLogins();
    }
  }, [logins]); //Adding fetchLogins here starts a chain reaction that makes everything go haywire, idk

  // Function to handle moving to next candidate
  const handleNext = () => {
    if (logins.length > 0) {
      setLogins(prevLogins => prevLogins.slice(1)); // Slice first login off
    }
  };

  // Function to save candidate to localStorage
  const saveCandidate = () => {
    if (candidate) {
      const updatedCandidates = [...storedCands, candidate];
      setStored(updatedCandidates);
      localStorage.setItem('storedCandidates', JSON.stringify(updatedCandidates));
      handleNext();
    }
  }

  return (
    <>
      <h1>Candidate Search</h1>
      {isLoading ? (
        <div><p>Loading...</p></div>
      ) : (
        <>
          {candidate && (
            <>
              <div><img src={candidate.avatar_url} alt="avatar" /></div>
              <table className='table'>
                <tr>
                  <td>
                    <h3>{candidate.name}</h3>
                    <p>Location: {candidate.location}</p>
                    <p>Email: {candidate.email}</p>
                    <p>Company: {candidate.company}</p>
                    <p>Bio: {candidate.bio}</p>
                  </td>
                </tr>
              </table>
            </>
          )}
        </>
      )}
      <div>
      <button onClick={handleNext}><IoCloseCircle /></button>
      <button onClick={saveCandidate}><IoAddCircle /></button> {/* Need save logic here*/}
      </div>
    </>
  );
};

export default CandidateSearch;
