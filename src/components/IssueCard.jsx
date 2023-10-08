import { Link } from 'react-router-dom';
import { useAddContext } from '../context/ReadingListContext';
import { RiFileList3Fill, RiFileList3Line } from 'react-icons/ri';

function IssueCard({ item, series }) {
  const { addedIssues, toggleLike } = useAddContext();
  return (
    <div className='container'>
      <div className='series'>
        <div className='reading-icon' onClick={() => toggleLike(item.id)}>
          <i className='container icon'>
            {addedIssues.includes(item.id) ? (
              <RiFileList3Fill />
            ) : (
              <RiFileList3Line />
            )}
          </i>
        </div>
        <img src={item.img} alt='item.title' />

        <div className='container'>
          <Link to={`/series/${series}/${item.id}`}>{item.issue}</Link>
        </div>
      </div>
    </div>
  );
}

export default IssueCard;
