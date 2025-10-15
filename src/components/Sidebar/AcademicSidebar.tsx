import React from 'react';

type Props = {
  selected: 'leave' | 'dropout' | 'transfer' | 'double' | 'inter';
  onSelect: (key: 'leave' | 'dropout' | 'transfer' | 'double' | 'inter') => void;
};

const AcademicSidebar: React.FC<Props> = ({ selected, onSelect }) => (
  <aside 
    className="sidebar active" 
    id="academic-sidebar"
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
    <h2>학적</h2>
    <ul>
      <li>
        <div className="sidebar-section">
          <div className="sidebar-section-title">학적</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button className={selected === 'leave' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('leave')}>휴/복학</button>
            </li>
            <li>
              <button className={selected === 'dropout' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('dropout')}>자퇴</button>
            </li>
            <li>
              <button className={selected === 'transfer' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('transfer')}>전과</button>
            </li>
            <li>
              <button className={selected === 'double' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('double')}>복수/부전공</button>
            </li>
            <li>
              <button className={selected === 'inter' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'} onClick={() => onSelect('inter')}>연계/융합전공</button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </aside>
);

export default AcademicSidebar;


