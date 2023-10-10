import { Link } from 'react-router-dom';

function SearchResult({ item, series }) {
  return (
    <div className='container search-result' key={item.id}>
      <div className='container' id='search-image'>
        <img src={item.img} alt={item.title} />
      </div>

      <div id='result-title'>
        <Link to={`/series/${series}/${item.id}`}>{item.title} </Link>
      </div>
    </div>
  );
}
export default SearchResult;
