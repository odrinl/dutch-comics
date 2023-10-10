import useFetch from '../hooks/useFetch';
import dataJson from '../data/unique_issues.json';
import { Link } from 'react-router-dom';
import censorArray from '../data/censor.json';
import UpButton from './UpButton';

function PopularComics() {
  const {
    data: page1Data,
    isLoading: page1Loading,
    error: page1Error,
  } = useFetch(
    'https://archive.org/advancedsearch.php?q=collection:dutchcomicbooks&fl[]=identifier&sort=month%20desc&rows=50&page=1&output=json'
  );

  const {
    data: page2Data,
    isLoading: page2Loading,
    error: page2Error,
  } = useFetch(
    'https://archive.org/advancedsearch.php?q=collection:dutchcomicbooks&fl[]=identifier&sort=month%20desc&rows=50&page=2&output=json'
  );

  const {
    data: page3Data,
    isLoading: page3Loading,
    error: page3Error,
  } = useFetch(
    'https://archive.org/advancedsearch.php?q=collection:dutchcomicbooks&fl[]=identifier&sort=month%20desc&rows=50&page=3&output=json'
  );

  if (page1Data && page2Data && page3Data) {
    // Extract identifiers from the JSON response for all three pages
    const page1Identifiers = page1Data.response.docs.map(
      (doc) => doc.identifier
    );
    const page2Identifiers = page2Data.response.docs.map(
      (doc) => doc.identifier
    );
    const page3Identifiers = page3Data.response.docs.map(
      (doc) => doc.identifier
    );
    const allIdentifiers = [
      ...page1Identifiers,
      ...page2Identifiers,
      ...page3Identifiers,
    ];

    const filteredIdentifiers = allIdentifiers.filter((identifier) => {
      return !censorArray.some((word) => identifier.includes(word));
    });

    const filteredIssues = [];
    const uniqueSeries = [];

    filteredIdentifiers.forEach((identifier) => {
      const matchingIssue = dataJson.find(
        (issue) => issue.identifier === identifier
      );

      if (matchingIssue) {
        if (!uniqueSeries.includes(matchingIssue.series)) {
          uniqueSeries.push(matchingIssue.series);
          filteredIssues.push({
            series: matchingIssue.series,
            img: matchingIssue.img,
          });
        }
      }
    });

    return (
      <>
        <div>
          <h2>
            Most popular series of the month <br /> (most viewed on Internet
            Archive website)
          </h2>
        </div>
        <div className='container'>
          {page1Loading || page2Loading || page3Loading ? (
            <div>Products are loading...</div>
          ) : (
            <>
              {page1Error || page2Error || page3Error ? (
                <div>
                  Sorry, comics can't be loaded. Server doesn't respond.
                </div>
              ) : (
                filteredIssues.map((item) => (
                  <div className='series' key={item.series}>
                    <img src={item.img} alt={item.series} />
                    <div className='container'>
                      <Link to={`/series/${item.series}`}>{item.series}</Link>
                    </div>
                    <UpButton />
                  </div>
                ))
              )}
            </>
          )}
        </div>
      </>
    );
  }
}

export default PopularComics;
