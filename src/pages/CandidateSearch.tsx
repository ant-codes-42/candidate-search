import { useState, useEffect } from 'react';
//import { searchGithub, searchGithubUser } from '../api/API';
import { ICandidate, ICandidateList } from '../interfaces/CandidateInterface';
import { IoCloseCircle } from 'react-icons/io5';

const CandidateSearch = () => {
  const [logins, setLogins] = useState<string[]>([]);
  const [candidate, setCandidate] = useState<ICandidate | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
  }, []);

  // Update candidate whenever logins changes
  useEffect(() => {
    if (logins.length > 0) {
      fetchUser(logins[0]);
    } else {
      // Refresh logins when we run out
      fetchLogins();
    }
  }, [logins]);

  // Function to handle moving to next candidate
  const handleNext = () => {
    if (logins.length > 0) {
      setLogins(prevLogins => prevLogins.slice(1)); // Slice first login off
    }
  };

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
      <button onClick={handleNext}><IoCloseCircle /></button>
    </>
  );
};

export default CandidateSearch;
