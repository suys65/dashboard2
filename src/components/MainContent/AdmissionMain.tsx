// src/components/MainContent/AdmissionMain.tsx
import React from 'react';

type Props = {
    selected: 'major' | 'exam';
    onSelect: (key: 'major' | 'exam') => void;
  };

const supersetLinks: Record<string, string> = {
  major: 'http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1',
  exam: 'http://10.80.86.78:8088/superset/dashboard/p/kQE0ebr2KZm/?standalone=1',
};

const AdmissionMain: React.FC<Props> = ({ selected, onSelect }) => (
  <section className="main-content">
    <div className="breadcrumb" id="breadcrumb">
      Home &gt; 입학 &gt; 신입생 충원
    </div>
    <div id="title" className="title">신입생 충원</div>

    <div className="content-buttons" id="content-buttons">
      <button
        className={selected === 'major' ? 'active-btn' : 'inactive-btn'}
        onClick={() => onSelect('major')}
      >
        학과별 신입생 수
      </button>
      <button
        className={selected === 'exam' ? 'active-btn' : 'inactive-btn'}
        onClick={() => onSelect('exam')}
      >
        전형별 신입생 수
      </button>
    </div>

    {/* 선택된 제목 표시 영역 */}
    <div id="selected-title" className="selected-title"></div>

    {/* Superset 대시보드 영역 */}
    <div className="dashboard-box" id="dashboard-box">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        fontSize: '16px',
        color: '#666',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div>
          <h3>대시보드 임베딩 준비 중</h3>
          <p>백엔드에서 게스트 토큰 API를 구현하면</p>
          <p>Superset Embedded SDK로 대시보드가 표시됩니다.</p>
          <p style={{ fontSize: '14px', color: '#999', marginTop: '10px' }}>
            현재 선택: {selected === 'major' ? '학과별 신입생 수' : '전형별 신입생 수'}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AdmissionMain;