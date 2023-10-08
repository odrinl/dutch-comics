import React, { createContext, useContext, useState, useCallback } from 'react';

// Create a context for your ReadingList
const ReadingListContext = createContext();

// Create a custom hook to access the context
export const useAddContext = () => {
  return useContext(ReadingListContext);
};

// Create the ReadingListContextProvider component
export function ReadingListContextProvider({ children }) {
  // Initialize your state, for example, addedIssues as an empty array
  const [addedIssues, setAddedIssues] = useState([]);

  // Function to toggle the "like" status of an issue
  const toggleLike = useCallback((issueId) => {
    setAddedIssues((prevIssues) => {
      if (prevIssues.includes(issueId)) {
        // Remove the issue from the list if it's already added
        return prevIssues.filter((id) => id !== issueId);
      } else {
        // Add the issue to the list if it's not already added
        return [...prevIssues, issueId];
      }
    });
  }, []);

  // Define the context value
  const contextValue = {
    addedIssues,
    toggleLike,
  };

  // Provide the context value to children components
  return (
    <ReadingListContext.Provider value={contextValue}>
      {children}
    </ReadingListContext.Provider>
  );
}
