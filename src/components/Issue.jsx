import { useParams } from 'react-router-dom';
import data from '../data/unique_issues.json';
import { useAddContext } from '../context/ReadingListContext';
import { RiFileList3Fill, RiFileList3Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

function Issue() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addedIssues, toggleLike } = useAddContext();

  const selectedIssue = data.find((issue) => String(issue.id) === String(id));

  const googleDocsViewerPrefix =
    'https://docs.google.com/gview?embedded=true&url=';

  const pdfLink = isMobile
    ? googleDocsViewerPrefix + selectedIssue.pdfLink
    : selectedIssue.pdfLink;

  return (
    <div className='reading-list'>
      <div className='back'>
        <button className='' onClick={() => navigate(-1)}>
          &lt;&lt; &nbsp;Go Back
        </button>
      </div>
      <div className='container issue'>
        <h2>Selected Issue:</h2>

        {selectedIssue ? (
          <div className='container card'>
            <div className='series inner-card'>
              <div
                className='container icon'
                onClick={() => toggleLike(selectedIssue.id)}
              >
                {addedIssues.includes(selectedIssue.id) ? (
                  <RiFileList3Fill className='liked' />
                ) : (
                  <RiFileList3Line />
                )}
              </div>
              <div className='container info'>
                <div id='issue-image'>
                  <img src={selectedIssue.img} alt={selectedIssue.title} />
                </div>
                <div className='container other-info'>
                  <div className='container'>
                    Series: {selectedIssue.series}
                  </div>
                  <div>Title: {selectedIssue.title}</div>
                  <div className='container'>
                    <button onClick={() => window.open(pdfLink, '_blank')}>
                      Click here to open pdf in a new window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>No issue found with the ID: {id}</p>
        )}
      </div>
    </div>
  );
}

export default Issue;
