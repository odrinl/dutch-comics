import { Link } from 'react-router-dom';
import UpButton from './UpButton';

function SearchResult({ item, series, clearQuery }) {
  return (
    <>
      <UpButton />
      <div className='container search-result' key={item.id}>
        <div className='container' id='search-image'>
          <img src={item.img} alt={item.title} />
        </div>

        <div id='result-title'>
          <Link to={`/series/${series}/${item.id}`} target='_blank'>
            {item.title}
          </Link>
        </div>
      </div>
    </>
  );
}
export default SearchResult;
