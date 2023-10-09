import { useParams } from 'react-router-dom';
import data from '../data/unique_issues.json';
import { useAddContext } from '../context/ReadingListContext';
import { RiFileList3Fill, RiFileList3Line } from 'react-icons/ri';

function SeriesItems() {
  const { id } = useParams();
  const { addedIssues, toggleLike } = useAddContext();

  const selectedIssue = data.find((issue) => String(issue.id) === String(id));

  return (
    <div className='container issue'>
      <h2>Selected Issue:</h2>

      {selectedIssue ? (
        <div className='container card'>
          <div className='container inner-card'>
            <div
              className='container icon'
              onClick={() => toggleLike(selectedIssue.id)}
            >
              {addedIssues.includes(selectedIssue.id) ? (
                <RiFileList3Fill />
              ) : (
                <RiFileList3Line />
              )}
            </div>
            <div className='container info'>
              <div id='issue-image'>
                <img src={selectedIssue.img} alt={selectedIssue.title} />
              </div>
              <div className='container other-info'>
                Title: {selectedIssue.title}
                <a
                  href={selectedIssue.pdfLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Click here to open pdf in a new window
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No issue found with the ID: {id}</p>
      )}
    </div>
  );
}

export default SeriesItems;
