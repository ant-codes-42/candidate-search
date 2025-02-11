import { NavLink } from 'react-router-dom'

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div>
      <ul className='nav'>
        <li className='nav-item'><NavLink to='/' className={({isActive}) => {return 'nav-link' + (isActive ? " active" : "")}}>Candidate Search</NavLink></li>
        <li className='nav-item'><NavLink to='/SavedCandidates' className={({isActive}) => {return 'nav-link' + (isActive ? " active" : "")}}>Saved Candidates</NavLink></li>
      </ul>
    </div>
  )
};

export default Nav;
