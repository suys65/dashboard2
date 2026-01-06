// src/components/Sidebar/EtcSidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type SelectedType = 'satisfactionMajor' | 'staffProfessor' | 'staffAssistant';

type Props = {
  submenu: 'satisfaction' | 'staff';
  selected: SelectedType;
  onSelect: (key: SelectedType) => void;
};

const EtcSidebar: React.FC<Props> = ({ selected, onSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar active" id="etc-sidebar">
      <h2>기타</h2>
      <ul>
        {/* 교육만족도 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">교육만족도</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'satisfactionMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('satisfactionMajor');
                  if (location.pathname !== '/etc/edu-satisfaction') navigate('/etc/edu-satisfaction');
                }}
              >
                학과별 평균 교육 만족도
              </button>
            </li>
          </ul>
        </li>

        {/* 교직원 현황 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">교직원 현황</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'staffProfessor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('staffProfessor');
                  if (location.pathname !== '/etc/staff') navigate('/etc/staff');
                }}
              >
                학과별 교수 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'staffAssistant' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('staffAssistant');
                  if (location.pathname !== '/etc/staff') navigate('/etc/staff');
                }}
              >
                학과별 조교 수
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default EtcSidebar;
