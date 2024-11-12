import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KeywordSearch from './KeywordSearch';
import Report from './Report';
import DataAnalysis from './Data_analysis';
import IssueSummary from './Issue_summary';
import OpinionCheck from './Opinion_check';
import OpinionFind from './Opinion_find';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KeywordSearch />} />
        <Route path="/report" element={<Report />} />
        <Route path="/Data_analysis" element={<DataAnalysis />} />
        <Route path="/Issue_summary" element={<IssueSummary />} />
        <Route path="/Opinion_check" element={<OpinionCheck />} />
        <Route path="/Opinion_finding" element={<OpinionFind />} />
      </Routes>
    </Router>
  );
}

export default App;
