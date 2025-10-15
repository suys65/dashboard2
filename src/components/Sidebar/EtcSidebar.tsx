import React from 'react';

type Props = {
  selected: 'satisfaction' | 'staff';
  onSelect: (key: 'satisfaction' | 'staff') => void;
};

const EtcSidebar: React.FC<Props> = ({ selected, onSelect }) => (
  <aside 
    className="sidebar active" 
    id="etc-sidebar"
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


