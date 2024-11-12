import React from 'react';
import { useLocation } from 'react-router-dom';

function Report() {
  const query = new URLSearchParams(useLocation().search);
  const keyword = query.get('q');

  return (
    <div>
      <h1>Report Page</h1>
      <p>검색한 키워드: {keyword}</p>
      {/* 여기에 보고서 페이지 관련 내용을 추가하세요 */}
    </div>
  );
}

export default Report;
