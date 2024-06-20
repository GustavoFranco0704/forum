import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/posts' className='nav-link'>Posts</Link>
        </li>
        
      </ul>
    </nav>
  );
}