// src/components/Sidebar/AdmissionSidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type Props = {
  submenu: 'recruit' | 'grade';
  selected: 'recruitMajor' | 'recruitExam' | 'gradeMajor' | 'gradeExam';
  onSelect: (key: 'recruitMajor' | 'recruitExam' | 'gradeMajor' | 'gradeExam') => void;
};

const AdmissionSidebar: React.FC<Props> = ({ submenu, selected, onSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar active" id="admission-sidebar">
      <h2>입학</h2>
      <ul>
        {/* 신입생 충원 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">신입생 충원</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'recruitMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('recruitMajor');
                  if (location.pathname !== '/admission/freshman-recruit') {
                    navigate('/admission/freshman-recruit');
                  }
                }}
              >
                학과별 신입생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'recruitExam' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('recruitExam');
                  if (location.pathname !== '/admission/freshman-recruit') {
                    navigate('/admission/freshman-recruit');
                  }
                }}
              >
                전형별 신입생 수
              </button>
            </li>
          </ul>
        </li>

        {/* 신입생 성적 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">신입생 성적</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'gradeMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('gradeMajor');
                  if (location.pathname !== '/admission/freshman-grade') {
                    navigate('/admission/freshman-grade');
                  }
                }}
              >
                학과별 신입생 성적
              </button>
            </li>
            <li>
              <button
                className={selected === 'gradeExam' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('gradeExam');
                  if (location.pathname !== '/admission/freshman-grade') {
                    navigate('/admission/freshman-grade');
                  }
                }}
              >
                전형별 신입생 성적
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default AdmissionSidebar;