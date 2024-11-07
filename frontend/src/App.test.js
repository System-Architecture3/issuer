import React from 'react';

function KeywordSearch() {
  const [keyword, setKeyword] = React.useState('');
  const keywordSuggestions = [
    '첼시', '태풍', '구글 클래스룸', '예비군', '이재명'
  ];

  const handleSearch = () => {
    window.location.href = `/report?q=${encodeURIComponent(keyword)}`;
  };

  return (
    <div className="bg-white text-gray-900 flex items-center justify-center min-h-screen">
      <div className="max-w-5xl mx-auto w-11/12 md:w-8/12 lg:w-7/12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4">요즘 궁금한 키워드에 대해 검색해보세요 🤔</h1>
        </div>
        <div className="flex justify-between items-center bg-green-50 p-4 rounded-full shadow-md mb-8 w-full">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="bg-transparent text-gray-700 placeholder-gray-400 p-2 flex-grow outline-none mr-4"
            placeholder="원하는 이슈 키워드 검색하기"
          />
          <button onClick={handleSearch} className="bg-green-500 text-white p-3 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="bg-white shadow-md rounded p-6 w-full">
          <div className="flex flex-wrap items-center space-x-4">
            <span className="font-bold text-lg text-black mr-4">제안</span>
            {keywordSuggestions.map((keyword, index) => (
              <a key={index} href={`/report/?q=${encodeURIComponent(keyword)}`} className="text-blue-600 mb-2">
                {keyword}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeywordSearch;
