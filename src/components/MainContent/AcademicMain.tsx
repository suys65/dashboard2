// src/components/MainContent/AcademicMain.tsx
import React from 'react';
import { getDashboardUrl, DASHBOARD_PATHS } from '../../config/superset';

type SelectedType = 
  | 'leaveMajor' | 'leaveGrade'
  | 'dropoutMajor' | 'dropoutGrade'
  | 'transferInMajor' | 'transferOutMajor' | 'transferInGrade' | 'transferOutGrade'
  | 'doubleApplyMajor' | 'doubleBelongMajor' | 'doubleApplyGrade' | 'doubleBelongGrade'
  | 'interMajor' | 'interBelongMajor' | 'interMajorGrade' | 'interBelongGrade';

type Props = {
  submenu: 'leave' | 'dropout' | 'transfer' | 'double' | 'inter';
  selected: SelectedType;
  onSelect: (key: SelectedType) => void;
};

const AcademicMain: React.FC<Props> = ({ submenu, selected, onSelect }) => {
  // 하위메뉴 정보
  const submenuInfo = {
    leave: { title: '휴복학', breadcrumb: 'Home > 학적 > 휴복학' },
    dropout: { title: '자퇴', breadcrumb: 'Home > 학적 > 자퇴' },
    transfer: { title: '전과', breadcrumb: 'Home > 학적 > 전과' },
    double: { title: '부복수전공', breadcrumb: 'Home > 학적 > 부복수전공' },
    inter: { title: '연계융합전공', breadcrumb: 'Home > 학적 > 연계융합전공' }
  };

  // 대시보드 URL 매핑
  const dashboardMap: Record<SelectedType, { url: string; title: string }> = {
    leaveMajor: { url: DASHBOARD_PATHS.ACADEMIC_LEAVE_MAJOR, title: '학과별 휴복학생 수' },
    leaveGrade: { url: DASHBOARD_PATHS.ACADEMIC_LEAVE_GRADE, title: '학년별 휴복학생 수' },
    dropoutMajor: { url: DASHBOARD_PATHS.ACADEMIC_DROPOUT_MAJOR, title: '학과별 자퇴생 수' },
    dropoutGrade: { url: DASHBOARD_PATHS.ACADEMIC_DROPOUT_GRADE, title: '학년별 자퇴생 수' },
    transferInMajor: { url: DASHBOARD_PATHS.ACADEMIC_TRANSFER_IN_MAJOR, title: '학과별 전입 학생 수' },
    transferOutMajor: { url: DASHBOARD_PATHS.ACADEMIC_TRANSFER_OUT_MAJOR, title: '학과별 전출 학생 수' },
    transferInGrade: { url: DASHBOARD_PATHS.ACADEMIC_TRANSFER_IN_GRADE, title: '학년별 전입 학생 수' },
    transferOutGrade: { url: DASHBOARD_PATHS.ACADEMIC_TRANSFER_OUT_GRADE, title: '학년별 전출 학생 수' },
    doubleApplyMajor: { url: DASHBOARD_PATHS.ACADEMIC_DOUBLE_APPLY_MAJOR, title: '신청학과별 학생 수' },
    doubleBelongMajor: { url: DASHBOARD_PATHS.ACADEMIC_DOUBLE_BELONG_MAJOR, title: '소속학과별 학생 수' },
    doubleApplyGrade: { url: DASHBOARD_PATHS.ACADEMIC_DOUBLE_APPLY_GRADE, title: '신청학과-학년별 학생 수' },
    doubleBelongGrade: { url: DASHBOARD_PATHS.ACADEMIC_DOUBLE_BELONG_GRADE, title: '소속학과-학년별 학생 수' },
    interMajor: { url: DASHBOARD_PATHS.ACADEMIC_INTER_MAJOR, title: '연계/융합전공별 학생 수' },
    interBelongMajor: { url: DASHBOARD_PATHS.ACADEMIC_INTER_BELONG_MAJOR, title: '소속전공별 학생 수' },
    interMajorGrade: { url: DASHBOARD_PATHS.ACADEMIC_INTER_MAJOR_GRADE, title: '연계/융합전공-학년별 학생 수' },
    interBelongGrade: { url: DASHBOARD_PATHS.ACADEMIC_INTER_BELONG_GRADE, title: '소속학과-학년별 학생 수' }
  };

  const currentDashboard = dashboardMap[selected];

  return (
    <section className="main-content">
      <div className="breadcrumb" id="breadcrumb">
        {submenuInfo[submenu].breadcrumb}
      </div>
      <div id="title" className="title">{submenuInfo[submenu].title}</div>

      <div className="content-buttons" id="content-buttons">
        {submenu === 'leave' && (
          <>
            <button
              className={selected === 'leaveMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('leaveMajor')}
            >
              학과별 휴복학생 수
            </button>
            <button
              className={selected === 'leaveGrade' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('leaveGrade')}
            >
              학년별 휴복학생 수
            </button>
          </>
        )}

        {submenu === 'dropout' && (
          <>
            <button
              className={selected === 'dropoutMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('dropoutMajor')}
            >
              학과별 자퇴생 수
            </button>
            <button
              className={selected === 'dropoutGrade' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('dropoutGrade')}
            >
              학년별 자퇴생 수
            </button>
          </>
        )}

        {submenu === 'transfer' && (
          <>
            <button
              className={selected === 'transferInMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('transferInMajor')}
            >
              학과별 전입 학생 수
            </button>
            <button
              className={selected === 'transferOutMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('transferOutMajor')}
            >
              학과별 전출 학생 수
            </button>
            <button
              className={selected === 'transferInGrade' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('transferInGrade')}
            >
              학년별 전입 학생 수
            </button>
            <button
              className={selected === 'transferOutGrade' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('transferOutGrade')}
            >
              학년별 전출 학생 수
            </button>
          </>
        )}

        {submenu === 'double' && (
          <>
            <button
              className={selected === 'doubleApplyMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('doubleApplyMajor')}
            >
              신청학과별 학생 수
            </button>
            <button
              className={selected === 'doubleBelongMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('doubleBelongMajor')}
            >
              소속학과별 학생 수
            </button>
            <button
              className={selected === 'doubleApplyGrade' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('doubleApplyGrade')}
            >
              신청학과-학년별 학생 수
            </button>
            <button
              className={selected === 'doubleBelongGrade' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('doubleBelongGrade')}
            >
              소속학과-학년별 학생 수
            </button>
          </>
        )}

        {submenu === 'inter' && (
          <>
            <button
              className={selected === 'interMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('interMajor')}
            >
              연계/융합전공별 학생 수
            </button>
            <button
              className={selected === 'interBelongMajor' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('interBelongMajor')}
            >
              소속전공별 학생 수
            </button>
            <button
              className={selected === 'interMajorGrade' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('interMajorGrade')}
            >
              연계/융합전공-학년별 학생 수
            </button>
            <button
              className={selected === 'interBelongGrade' ? 'active-btn' : 'inactive-btn'}
              onClick={() => onSelect('interBelongGrade')}
            >
              소속학과-학년별 학생 수
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

export default AcademicMain;
