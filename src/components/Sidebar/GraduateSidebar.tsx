import React from 'react';

type Props = {
  selected: 'undergrad' | 'gradschool';
  onSelect: (key: 'undergrad' | 'gradschool') => void;
};

const GraduateSidebar: React.FC<Props> = ({ selected, onSelect }) => (
  <aside className="sidebar" id="sidebar">
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


