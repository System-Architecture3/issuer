import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KeywordSearch from './KeywordSearch';
import Report from './Report';
import DataAnalysis from './DataAnalysis';
import IssueSummary from './IssueSummary';
import OpinionCheck from './OpinionCheck';
import OpinionFind from './OpinionFind';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KeywordSearch />} />
        <Route path="/report" element={<Report />} />
        <Route path="/DataAnalysis" element={<DataAnalysis />} />
        <Route path="/IssueSummary" element={<IssueSummary />} />
        <Route path="/OpinionCheck" element={<OpinionCheck />} />
        <Route path="/OpinionFind" element={<OpinionFind />} />
      </Routes>
    </Router>
  );
}

export default App;
