import { Link, useParams } from 'react-router-dom';
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

  const googleDocsViewer = 'https://docs.google.com/gview?embedded=true&url=';

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
                  <div>
                    <strong>Series:</strong>
                    <br />

                    <Link to={`/series/${selectedIssue.series}`}>
                      {selectedIssue.series}
                    </Link>
                  </div>
                  <div>
                    <strong>Title:</strong> {selectedIssue.title}
                  </div>
                  <div className='container pdf'>
                    <a
                      href={
                        isMobile
                          ? googleDocsViewer + selectedIssue.pdfLink
                          : selectedIssue.pdfLink
                      }
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Click here to open pdf in a new window
                    </a>

                    <a id='download' href={selectedIssue.pdfLink} download>
                      Download PDF
                    </a>
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
