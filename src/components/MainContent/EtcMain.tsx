// src/components/MainContent/EtcMain.tsx
import React from 'react';
import { getDashboardUrl, DASHBOARD_PATHS } from '../../config/superset';

type SelectedType = 'satisfactionMajor' | 'staffProfessor' | 'staffAssistant';

type Props = {
  submenu: 'satisfaction' | 'staff';
  selected: SelectedType;
  onSelect: (key: SelectedType) => void;
};

const EtcMain: React.FC<Props> = ({ submenu, selected, onSelect }) => {
  // 하위메뉴 정보
  const submenuInfo = {
    satisfaction: { title: '교육만족도', breadcrumb: 'Home > 기타 > 교육만족도' },
    staff: { title: '교직원 현황', breadcrumb: 'Home > 기타 > 교직원 현황' }
  };

  // 대시보드 URL 매핑
  const dashboardMap: Record<SelectedType, { url: string; title: string }> = {
    satisfactionMajor: { url: DASHBOARD_PATHS.ETC_SATISFACTION_MAJOR, title: '학과별 평균 교육 만족도' },
    staffProfessor: { url: DASHBOARD_PATHS.ETC_STAFF_PROFESSOR, title: '학과별 교수 수' },
    staffAssistant: { url: DASHBOARD_PATHS.ETC_STAFF_ASSISTANT, title: '학과별 조교 수' }
  };

  const currentDashboard = dashboardMap[selected];

  return (
    <section className="main-content">
      <div className="breadcrumb" id="breadcrumb">
        {submenuInfo[submenu].breadcrumb}
      </div>
      <div id="title" className="title">{submenuInfo[submenu].title}</div>

      <div className="content-buttons" id="content-buttons">
        {submenu === 'satisfaction' && (
          <button
            className={selected === 'satisfactionMajor' ? 'active-btn' : 'inactive-btn'}
            onClick={() => onSelect('satisfactionMajor')}
          >
            학과별 평균 교육 만족도
          </button>
        )}

        {submenu === 'staff' && (
          <>
            <button
              className={selected === 'staffProfessor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('staffProfessor')}
            >
              학과별 교수 수
            </button>
            <button
              className={selected === 'staffAssistant' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('staffAssistant')}
            >
              학과별 조교 수
            </button>
          </>
        )}
      </div>

      {/* Superset 대시보드 영역 */}
      <div className="dashboard-box" id="dashboard-box">
        {currentDashboard.url ? (
          <iframe
            src={getDashboardUrl(currentDashboard.url)}
            width="100%"
            height="100%"
            frameBorder={0}
            title={currentDashboard.title}
            referrerPolicy="no-referrer"
            loading="lazy"
            style={{
              minHeight: '700px',
              border: 'none',
              display: 'block'
            }}
          />
        ) : (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '700px',
            fontSize: '16px',
            color: '#666',
            textAlign: 'center',
            padding: '20px'
          }}>
            <div>
              <h3>{currentDashboard.title} 대시보드 준비 중</h3>
              <p>대시보드 URL이 준비되면 여기에 표시됩니다.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EtcMain;
