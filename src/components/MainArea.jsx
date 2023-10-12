import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ReadingList from './ReadingList';
import SearchForm from './SearchForm';
import PopularComics from './PopularComics';
import Series from './Series';
import SeriesIssues from './SeriesIssues';
import Issue from './Issue';
import FetchError from '../errorHandling/FetchError';
import NotFound from '../errorHandling/NotFound';
import { ReadingListContextProvider } from '../context/ReadingListContext';

function MainArea() {
  return (
    <div className='main-area container'>
      <ReadingListContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reading-list' element={<ReadingList />} />
          <Route path='/search-form' element={<SearchForm />} />
          <Route path='/popular-comics' element={<PopularComics />} />
          <Route path='/series' element={<Series />} />
          <Route path='/series/:series' element={<SeriesIssues />} />
          <Route path='/series/:series/:id' element={<Issue />} />
          <Route path='/fetch-error' element={<FetchError />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ReadingListContextProvider>
    </div>
  );
}

export default MainArea;
