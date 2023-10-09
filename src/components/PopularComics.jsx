import useFetch from '../hooks/useFetch';
import dataJson from '../data/unique_issues.json';
import { Link } from 'react-router-dom';

function PopularComics() {
  const { data, isLoading, error } = useFetch(
    'https://archive.org/advancedsearch.php?q=collection:dutchcomicbooks&fl[]=identifier&sort=month%20desc&rows=50&page=1&output=json'
  );

  if (data) {
    // Step 1: Extract identifiers from the JSON response
    const identifiers = data.response.docs.map((doc) => doc.identifier);
    console.log(identifiers);

    // Step 2: Filter unique_issues.json based on the identifiers
    const filteredIssues = [];
    const uniqueSeries = [];

    identifiers.forEach((identifier) => {
      if (filteredIssues.length >= 20) {
        return; // Stop iterating if we already have 20 elements in filteredIssues
      }

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
    console.log(filteredIssues);

    return (
      <>
        <div>
          <h2>Most popular series of the month</h2>
        </div>
        <div className='container'>
          {isLoading && <div>Products are loading...</div>}
          {error && (
            <div>Sorry, comics can't be loaded. Server doesn't respond.</div>
          )}
          {filteredIssues.map((item) => (
            <div className='series' key={item.id}>
              <img src={item.img} alt='item.series' />
              <div className='container'>
                <Link to={`/series/${item.series}`}>{item.series}</Link>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default PopularComics;
