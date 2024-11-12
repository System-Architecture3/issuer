import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KeywordSearch from './KeywordSearch';
import Report from './Report';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KeywordSearch />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
