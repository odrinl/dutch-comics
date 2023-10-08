import { useParams } from 'react-router-dom';
import data from '../data/unique_issues.json';
import IssueCard from './IssueCard';

function SeriesIssues() {
  const { series } = useParams();

  // Filter the data to get items with the matching series
  const filteredData = data.filter((item) => item.series === series);

  return (
    <div>
      <h2>Series: {series}</h2>
      <div className='container'>
        {filteredData.map((item) => (
          <IssueCard key={item.id} item={item} series={series} />
        ))}
      </div>
    </div>
  );
}

export default SeriesIssues;
