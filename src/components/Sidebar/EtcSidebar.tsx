import React from 'react';

type Props = {
  selected: 'satisfaction' | 'staff';
  onSelect: (key: 'satisfaction' | 'staff') => void;
};

const EtcSidebar: React.FC<Props> = ({ selected, onSelect }) => (
  <aside className="sidebar" id="sidebar">
    <h2>기타</h2>
    <ul>
      <li>
        <a href="#" className="sidebar-btn" onClick={e => e.preventDefault()}>
          기타 <span className="toggle-arrow">▼</span>
        </a>
        <ul className="sidebar-submenu" style={{ display: 'block' }}>
          <li>
            <button className={selected === 'satisfaction' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('satisfaction')}>교육만족도</button>
          </li>
          <li>
            <button className={selected === 'staff' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('staff')}>교직원 현황</button>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
);

export default EtcSidebar;


