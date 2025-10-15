import React from 'react';

type Props = {
  selected: 'undergrad' | 'gradschool';
  onSelect: (key: 'undergrad' | 'gradschool') => void;
};

const GraduateSidebar: React.FC<Props> = ({ selected, onSelect }) => (
  <aside 
    className="sidebar active" 
    id="graduate-sidebar"
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
    <h2>졸업</h2>
    <ul>
      <li>
        <a href="#" className="sidebar-btn" onClick={e => e.preventDefault()}>
          졸업 <span className="toggle-arrow">▼</span>
        </a>
        <ul className="sidebar-submenu" style={{ display: 'block' }}>
          <li>
            <button className={selected === 'undergrad' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('undergrad')}>졸업생</button>
          </li>
          <li>
            <button className={selected === 'gradschool' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('gradschool')}>대학원</button>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
);

export default GraduateSidebar;


