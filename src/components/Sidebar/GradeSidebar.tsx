import React from 'react';

type Props = {
  selected: 'total' | 'major' | 'general';
  onSelect: (key: 'total' | 'major' | 'general') => void;
};

const GradeSidebar: React.FC<Props> = ({ selected, onSelect }) => (
  <aside className="sidebar" id="sidebar">
    <h2>성적</h2>
    <ul>
      <li>
        <a href="#" className="sidebar-btn" onClick={e => e.preventDefault()}>
          성적 <span className="toggle-arrow">▼</span>
        </a>
        <ul className="sidebar-submenu" style={{ display: 'block' }}>
          <li>
            <button className={selected === 'total' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('total')}>전체학점</button>
          </li>
          <li>
            <button className={selected === 'major' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('major')}>전공학점</button>
          </li>
          <li>
            <button className={selected === 'general' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('general')}>교양학점</button>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
);

export default GradeSidebar;


