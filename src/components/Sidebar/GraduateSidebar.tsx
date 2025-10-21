// src/components/Sidebar/GraduateSidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type SelectedType = 'undergradMajor' | 'gradSchoolMajor';

type Props = {
  submenu: 'undergrad' | 'gradschool';
  selected: SelectedType;
  onSelect: (key: SelectedType) => void;
};

const GraduateSidebar: React.FC<Props> = ({ submenu, selected, onSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar active" id="graduate-sidebar">
      <h2>졸업</h2>
      <ul>
        {/* 졸업생 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">졸업생</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'undergradMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('undergradMajor');
                  if (location.pathname !== '/graduate/undergrad') navigate('/graduate/undergrad');
                }}
              >
                학과별 졸업자 수
              </button>
            </li>
          </ul>
        </li>

        {/* 대학원 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">대학원</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'gradSchoolMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('gradSchoolMajor');
                  if (location.pathname !== '/graduate/grad-school') navigate('/graduate/grad-school');
                }}
              >
                학과별 지대 대학원 진학 학생 수
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default GraduateSidebar;
