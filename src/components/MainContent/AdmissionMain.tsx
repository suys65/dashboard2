// src/components/MainContent/AdmissionMain.tsx
import React from 'react';
import { getDashboardUrl, DASHBOARD_PATHS } from '../../config/superset';

type Props = {
  submenu: 'recruit' | 'grade';
  selected: 'recruitMajor' | 'recruitExam' | 'gradeMajor' | 'gradeExam';
  onSelect: (key: 'recruitMajor' | 'recruitExam' | 'gradeMajor' | 'gradeExam') => void;
};

const AdmissionMain: React.FC<Props> = ({ submenu, selected, onSelect }) => {
  // 하위메뉴 정보
  const submenuInfo = {
    recruit: { title: '신입생 충원', breadcrumb: 'Home > 입학 > 신입생 충원' },
    grade: { title: '신입생 성적', breadcrumb: 'Home > 입학 > 신입생 성적' }
  };

  // 대시보드 URL 매핑
  const dashboardMap = {
    recruitMajor: { url: DASHBOARD_PATHS.ADMISSION_RECRUIT_MAJOR, title: '학과별 신입생 수' },
    recruitExam: { url: DASHBOARD_PATHS.ADMISSION_RECRUIT_EXAM, title: '전형별 신입생 수' },
    gradeMajor: { url: DASHBOARD_PATHS.ADMISSION_GRADE_MAJOR, title: '학과별 신입생 성적' },
    gradeExam: { url: DASHBOARD_PATHS.ADMISSION_GRADE_EXAM, title: '전형별 신입생 성적' }
  };

  const currentDashboard = dashboardMap[selected];

  return (
    <section className="main-content">
      <div className="breadcrumb" id="breadcrumb">
        {submenuInfo[submenu].breadcrumb}
      </div>
      <div id="title" className="title">{submenuInfo[submenu].title}</div>

      <div className="content-buttons" id="content-buttons">
        {submenu === 'recruit' ? (
          <>
            <button
              className={selected === 'recruitMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('recruitMajor')}
            >
              학과별 신입생 수
            </button>
            <button
              className={selected === 'recruitExam' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('recruitExam')}
            >
              전형별 신입생 수
            </button>
          </>
        ) : (
          <>
            <button
              className={selected === 'gradeMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('gradeMajor')}
            >
              학과별 신입생 성적
            </button>
            <button
              className={selected === 'gradeExam' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('gradeExam')}
            >
              전형별 신입생 성적
            </button>
          </>
        )}
      </div>

      {/* Superset 대시보드 영역 */}
      <div className="dashboard-box" id="dashboard-box">
        {currentDashboard.url ? (
          <iframe
            src={getDashboardUrl(currentDashboard.url)}
            title={currentDashboard.title}
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        ) : (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '600px',
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

export default AdmissionMain;