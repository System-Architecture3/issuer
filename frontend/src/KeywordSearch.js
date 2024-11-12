// src/KeywordSearch.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function KeywordSearch() {
  const [keyword, setKeyword] = useState('');
  const [keywordSuggestions, setKeywordSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://app:8000';
    fetch(`${backendUrl}/api/trending`)
      .then(response => response.json())
      .then(data => {
        setKeywordSuggestions(data);
      })
      .catch(error => {
        console.error('Error fetching trending keywords:', error);
      });
  }, []);

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      navigate(`/report?q=${encodeURIComponent(keyword)}`);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  return (
    <div className="container">
      <div className="content">
        <div className="title-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <h1 className="title">요즘 궁금한 키워드에 대해 검색해보세요</h1>
          <span role="img" aria-label="thinking face" className="emoji-large">🤔</span>
        </div>
        <div className="search-box">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyUp={handleKeyUp}
            className="search-input"
            placeholder="원하는 이슈 키워드 검색하기"
          />
          <button onClick={handleButtonClick} className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="suggestions">
          <span className="suggestions-title">제안</span>
          {keywordSuggestions.map((suggestion, index) => (
            <a key={index} href={`/report/?q=${encodeURIComponent(suggestion)}`} className="suggestion-link">
              {suggestion}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeywordSearch;
