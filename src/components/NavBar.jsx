import { Link, NavLink } from 'react-router-dom';
import { RiFileList3Fill } from 'react-icons/ri';

function NavBar() {
  return (
    <nav className='container'>
      <div className='container navbar'>
        <div className='container home'>
          <Link to={'/'}>
            <h2>Dutch Comics</h2>
          </Link>
        </div>
        <div className='container all-links'>
          <div className='container link'>
            <NavLink to={'/series'}>All series</NavLink>
          </div>
          <div className='container link'>
            <NavLink to={'/popular-comics'}>Popular Comics</NavLink>
          </div>
          <div className='container link'>
            <NavLink to={'/reading-list'}>
              ReadingList &nbsp;
              <RiFileList3Fill />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
