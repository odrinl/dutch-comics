import { Link } from 'react-router-dom';
import data from '../data/series.json';
import UpButton from './UpButton';

function Series() {
  return (
    <div>
      <h2>All Series</h2>
      <UpButton />
      <div className='container'>
        {data.map((item) => (
          <div className='series' key={item.id}>
            <img src={item.img} alt='item.series' />
            <div className='container'>
              <Link to={`/series/${item.series}`}>{item.series}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Series;
