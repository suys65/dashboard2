// src/components/Sidebar/AdmissionSidebar.tsx
import React from 'react';

type Props = {
  selected: 'major' | 'exam';
  onSelect: (key: 'major' | 'exam') => void;
};

const AdmissionSidebar: React.FC<Props> = ({ selected, onSelect }) => (
  <aside 
    className="sidebar active" 
    id="admission-sidebar"
    style={{
      position: 'fixed',
      left: '110px',
      top: '90px',
      width: '260px',
      height: 'calc(100vh - 110px)',
      backgroundColor: '#ffffff',
      padding: '20px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflowY: 'auto',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 999,
      display: 'block',
      visibility: 'visible',
      opacity: 1
    }}
  >
    <h2>입학</h2>
    <ul>
      <li>
        <a href="#" className="sidebar-btn" onClick={e => e.preventDefault()}>
          신입생 충원 <span className="toggle-arrow">▼</span>
        </a>
        <ul className="sidebar-submenu" style={{ display: 'block' }}>
          <li>
            <button
              className={selected === 'major' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
              onClick={() => onSelect('major')}
            >
              학과별 신입생 수
            </button>
          </li>
          <li>
            <button
              className={selected === 'exam' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
              onClick={() => onSelect('exam')}
            >
              전형별 신입생 수
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
);

export default AdmissionSidebar;