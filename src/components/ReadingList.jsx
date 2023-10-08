import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddContext } from '../context/ReadingListContext';
import IssueCard from './IssueCard';
import data from '../data/unique_issues.json';

function ReadingList() {
  const navigate = useNavigate();
  const { addedIssues } = useAddContext();

  // Filter the issue data to only include the added issues
  const addedIssuesData = data.filter((item) => addedIssues.includes(item.id));

  return (
    <div className='back'>
      <button className='' onClick={() => navigate(-1)}>
        &lt;&lt; &nbsp;Go Back
      </button>
      <h2>Reading List</h2>
      <div className='container'>
        <br />

        <div className='container'>
          {addedIssuesData.map((item) => (
            <div className='container'>
              <IssueCard key={item.id} item={item} series={item.series} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReadingList;
