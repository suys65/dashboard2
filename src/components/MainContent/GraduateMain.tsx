// src/components/MainContent/GraduateMain.tsx
import React from 'react';
import { getDashboardUrl, DASHBOARD_PATHS } from '../../config/superset';

type SelectedType = 'undergradMajor' | 'gradSchoolMajor';

type Props = {
  submenu: 'undergrad' | 'gradschool';
  selected: SelectedType;
  onSelect: (key: SelectedType) => void;
};

const GraduateMain: React.FC<Props> = ({ submenu, selected, onSelect }) => {
  // 하위메뉴 정보
  const submenuInfo = {
    undergrad: { title: '졸업생', breadcrumb: 'Home > 졸업 > 졸업생' },
    gradschool: { title: '대학원', breadcrumb: 'Home > 졸업 > 대학원' }
  };

  // 대시보드 URL 매핑
  const dashboardMap: Record<SelectedType, { url: string; title: string }> = {
    undergradMajor: { url: DASHBOARD_PATHS.GRADUATE_UNDERGRAD_MAJOR, title: '학과별 졸업자 수' },
    gradSchoolMajor: { url: DASHBOARD_PATHS.GRADUATE_SCHOOL_MAJOR, title: '학과별 지대 대학원 진학 학생 수' }
  };

  const currentDashboard = dashboardMap[selected];

  return (
    <section className="main-content">
      <div className="breadcrumb" id="breadcrumb">
        {submenuInfo[submenu].breadcrumb}
      </div>
      <div id="title" className="title">{submenuInfo[submenu].title}</div>

      <div className="content-buttons" id="content-buttons">
        {submenu === 'undergrad' && (
          <button
            className={selected === 'undergradMajor' ? 'active-btn' : 'inactive-btn'}
            onClick={() => onSelect('undergradMajor')}
          >
            학과별 졸업자 수
          </button>
        )}

        {submenu === 'gradschool' && (
          <button
            className={selected === 'gradSchoolMajor' ? 'active-btn' : 'inactive-btn'}
            onClick={() => onSelect('gradSchoolMajor')}
          >
            학과별 지대 대학원 진학 학생 수
          </button>
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

export default GraduateMain;
