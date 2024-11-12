import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Report.css'; 

Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Title, Tooltip, Legend, Filler);

function Report() {
  const query = new URLSearchParams(useLocation().search);
  const keyword = query.get('q');

  const data = {
    labels: [
      '2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05',
      '2024-08-18', 
    ],
    datasets: [
      {
        label: '검색량',
        data: [
          15000, 20000, 25000, 30000, 40000,
          27636, // 데이터 수치
        ],
        fill: true,
        backgroundColor: 'rgba(173, 216, 230, 0.3)',
        borderColor: 'rgba(0, 191, 255, 1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container">
      {/* 키워드와 검색량 분석 */}
      <div className="left-block">
        <h1>{keyword}</h1>  
        <p>문서 생성 시각: yy-mm-dd hh:mm:ss</p>
        <p>이전 문서</p>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/DataAnalysis">데이터 분석</Link> |
          <Link to="/IssueSummary">이슈 정리</Link> |
          <Link to="/OpinionCheck">여론 확인</Link> |
          <Link to="/OpinionFind">의견 찾기</Link>
        </nav>

        {/* 검색량 분석 섹션 */}
        <div className="analysis-section">
          <h2>검색량 분석</h2>
          <Line data={data} options={options} />
        </div>
      </div>

      {/* 실시간 검색어와 최근 생성 */}
      <div className="right-block">
        {/* 실시간 검색어 블록 */}
        <div className="sub-block">
          <h2>실시간 검색어</h2>
          <ul>
            <li>첼시</li>
            <li>태풍</li>
            <li>구글 클래스룸</li>
            <li>네이버군</li>
            <li>이재명</li>
            <li>레알 마드리드</li>
            <li>성신여대</li>
            <li>정현수</li>
            <li>임영웅</li>
            <li>은지원훈련</li>
          </ul>
        </div>

        {/* 최근 생성 블록 */}
        <div className="sub-block">
          <h2>최근 생성</h2>
          <ul>
            <li>임영웅 축구</li>
            <li>임영웅 응원하겠다</li>
            <li>임영웅</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Report;
