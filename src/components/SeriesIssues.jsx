import { useParams } from 'react-router-dom';
import data from '../data/unique_issues.json';
import IssueCard from './IssueCard';
import { useNavigate } from 'react-router-dom';

function SeriesIssues() {
  const navigate = useNavigate();
  const { series } = useParams();

  // Filter the data to get items with the matching series
  const filteredData = data.filter((item) => item.series === series);

  return (
    <div className='reading-list'>
      <div className='back'>
        <button className='' onClick={() => navigate(-1)}>
          &lt;&lt; &nbsp;Go Back
        </button>
      </div>
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
