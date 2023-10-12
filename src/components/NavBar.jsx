import { Link, NavLink } from 'react-router-dom';
import { RiFileList3Fill } from 'react-icons/ri';
import SearchForm from './SearchForm';
import { useState } from 'react';

function NavBar() {
  const [searchVisible, setSearchVisible] = useState(true);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className='top'>
      <div className='container navbar'>
        <div id='brand-name'>
          <NavLink to={'/'}>
            <div className='home'>
              <h2>Dutch Comics</h2>
            </div>
          </NavLink>
        </div>
        <div className='container all-links'>
          <div className='container link'>
            <NavLink to={'/series'}>All series</NavLink>
          </div>
          <div className='container link'>
            <NavLink to={'/popular-comics'}>Popular Series</NavLink>
          </div>
          <div className='container link'>
            <NavLink to={'/reading-list'}>
              Reading List &nbsp;
              <RiFileList3Fill />
            </NavLink>
          </div>
          <div className='container link'>
            <Link
              className={searchVisible ? 'active' : ''}
              onClick={toggleSearch}
            >
              {searchVisible ? 'Hide Search' : 'Show Search'}
            </Link>
          </div>
        </div>
      </div>
      {searchVisible && <SearchForm />}
    </nav>
  );
}

export default NavBar;
