// src/components/Sidebar/AdmissionSidebar.tsx
import React from 'react';

type Props = {
  selected: 'major' | 'exam';
  onSelect: (key: 'major' | 'exam') => void;
};

const AdmissionSidebar: React.FC<Props> = ({ selected, onSelect }) => (
  <aside className="sidebar" id="sidebar">
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