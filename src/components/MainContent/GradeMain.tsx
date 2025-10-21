// src/components/MainContent/GradeMain.tsx
import React from 'react';
import { getDashboardUrl, DASHBOARD_PATHS } from '../../config/superset';

type SelectedType = 
  | 'totalMajor' | 'totalYear'
  | 'majorMajor' | 'majorYear'
  | 'generalMajor' | 'generalYear';

type Props = {
  submenu: 'total' | 'major' | 'general';
  selected: SelectedType;
  onSelect: (key: SelectedType) => void;
};

const GradeMain: React.FC<Props> = ({ submenu, selected, onSelect }) => {
  // 하위메뉴 정보
  const submenuInfo = {
    total: { title: '전체학점', breadcrumb: 'Home > 성적 > 전체학점' },
    major: { title: '전공학점', breadcrumb: 'Home > 성적 > 전공학점' },
    general: { title: '교양학점', breadcrumb: 'Home > 성적 > 교양학점' }
  };

  // 대시보드 URL 매핑
  const dashboardMap: Record<SelectedType, { url: string; title: string }> = {
    totalMajor: { url: DASHBOARD_PATHS.GRADE_TOTAL_MAJOR, title: '학과별 평균 전체학점' },
    totalYear: { url: DASHBOARD_PATHS.GRADE_TOTAL_YEAR, title: '학년별 평균 전체학점' },
    majorMajor: { url: DASHBOARD_PATHS.GRADE_MAJOR_MAJOR, title: '학과별 평균 전공학점' },
    majorYear: { url: DASHBOARD_PATHS.GRADE_MAJOR_YEAR, title: '학년별 평균 전공학점' },
    generalMajor: { url: DASHBOARD_PATHS.GRADE_GENERAL_MAJOR, title: '학과별 평균 교양학점' },
    generalYear: { url: DASHBOARD_PATHS.GRADE_GENERAL_YEAR, title: '학년별 평균 교양학점' }
  };

  const currentDashboard = dashboardMap[selected];

  return (
    <section className="main-content">
      <div className="breadcrumb" id="breadcrumb">
        {submenuInfo[submenu].breadcrumb}
      </div>
      <div id="title" className="title">{submenuInfo[submenu].title}</div>

      <div className="content-buttons" id="content-buttons">
        {submenu === 'total' && (
          <>
            <button
              className={selected === 'totalMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('totalMajor')}
            >
              학과별 평균 전체학점
            </button>
            <button
              className={selected === 'totalYear' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('totalYear')}
            >
              학년별 평균 전체학점
            </button>
          </>
        )}

        {submenu === 'major' && (
          <>
            <button
              className={selected === 'majorMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('majorMajor')}
            >
              학과별 평균 전공학점
            </button>
            <button
              className={selected === 'majorYear' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('majorYear')}
            >
              학년별 평균 전공학점
            </button>
          </>
        )}

        {submenu === 'general' && (
          <>
            <button
              className={selected === 'generalMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('generalMajor')}
            >
              학과별 평균 교양학점
            </button>
            <button
              className={selected === 'generalYear' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('generalYear')}
            >
              학년별 평균 교양학점
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

export default GradeMain;
