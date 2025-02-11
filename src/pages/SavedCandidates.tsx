import { useState, useEffect } from 'react';
import { ICandidate } from '../interfaces/CandidateInterface'
import { FaMinusCircle } from "react-icons/fa";

const SavedCandidates = () => {
  const [storedCands, setStored] = useState<ICandidate[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('storedCandidates');
    if (stored) {
      setStored(JSON.parse(stored));
    }
  }, []);

  const removeCandidate = (indexToRemove: number) => {
    setStored(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  }

  useEffect(() => {
    localStorage.setItem('storedCandidates', JSON.stringify(storedCands));
  }, [storedCands]);

  return (
    <>
      <h1>Potential Candidates</h1>
      <table className='table'>
        <tr>
          <th>Image</th><th>Name</th><th>Location</th><th>Email</th><th>Company</th><th>Bio</th><th>Reject</th>
        </tr>
        {storedCands.map((saved, index) => (
          <tr key={index}>
            <td><img src={saved.avatar_url} /></td>
            <td>{JSON.stringify(saved.name)}</td>
            <td>{JSON.stringify(saved.location)}</td>
            <td>{JSON.stringify(saved.email)}</td>
            <td>{JSON.stringify(saved.company)}</td>
            <td>{JSON.stringify(saved.bio)}</td>
            <td><button onClick={() => removeCandidate(index)}><FaMinusCircle /></button></td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default SavedCandidates;
