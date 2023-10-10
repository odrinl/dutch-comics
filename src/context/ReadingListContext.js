import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for your ReadingList
const ReadingListContext = createContext();

// Create a custom hook to access the context
export const useAddContext = () => {
  return useContext(ReadingListContext);
};

export function ReadingListContextProvider({ children }) {
  const [addedIssues, setAddedIssues] = useState([]);

  useEffect(() => {
    const storedReadingList = localStorage.getItem('readingList');
    if (storedReadingList) {
      setAddedIssues(JSON.parse(storedReadingList));
    }
  }, []);

  const toggleLike = (issueId) => {
    setAddedIssues((prevIssues) => {
      if (prevIssues.includes(issueId)) {
        const updatedIssues = prevIssues.filter((id) => id !== issueId);
        localStorage.setItem('readingList', JSON.stringify(updatedIssues));
        return updatedIssues;
      } else {
        const updatedIssues = [...prevIssues, issueId];
        localStorage.setItem('readingList', JSON.stringify(updatedIssues));
        return updatedIssues;
      }
    });
  };

  const contextValue = {
    addedIssues,
    toggleLike,
  };

  return (
    <ReadingListContext.Provider value={contextValue}>
      {children}
    </ReadingListContext.Provider>
  );
}
