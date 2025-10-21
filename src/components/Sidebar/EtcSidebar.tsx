// src/components/Sidebar/EtcSidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type SelectedType = 'satisfactionMajor' | 'staffMajor';

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

        {/* 교수현황 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">교수현황</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'staffMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('staffMajor');
                  if (location.pathname !== '/etc/staff') navigate('/etc/staff');
                }}
              >
                학과별 교수 수
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default EtcSidebar;
