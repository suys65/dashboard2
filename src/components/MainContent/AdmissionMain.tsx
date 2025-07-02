// src/components/MainContent/AdmissionMain.tsx
import React from 'react';

type Props = {
    selected: 'major' | 'exam';
    onSelect: (key: 'major' | 'exam') => void;
  };

const tableauLinks: Record<string, string> = {
  major: 'https://prod-apnortheast-a.online.tableau.com/t/inu_dashboard/views/_17367196286860/1?:origin=card_share_link&:embed=y',
  exam: 'https://prod-apnortheast-a.online.tableau.com/t/inu_dashboard/views/_17367196286860/2?:origin=card_share_link&:embed=y',
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

    {/* 태블로 등 대시보드 영역 */}
    <div className="dashboard-box" id="dashboard-box">
      <iframe
        src={tableauLinks[selected]}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        title="Tableau"
      />
    </div>
  </section>
);

export default AdmissionMain;