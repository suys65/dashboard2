// src/components/Sidebar/GradeSidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type SelectedType = 
  | 'totalMajor' | 'totalYear'
  | 'majorMajor' | 'majorYear'
  | 'generalMajor' | 'generalYear';

type Props = {
  submenu: 'total' | 'major' | 'general';
  selected: SelectedType;
  onSelect: (key: SelectedType) => void;
};

const GradeSidebar: React.FC<Props> = ({ submenu, selected, onSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar active" id="grade-sidebar">
      <h2>성적</h2>
      <ul>
        {/* 전체학점 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">전체학점</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'totalMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('totalMajor');
                  if (location.pathname !== '/grade/total') navigate('/grade/total');
                }}
              >
                학과별 평균 전체학점
              </button>
            </li>
            <li>
              <button
                className={selected === 'totalYear' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('totalYear');
                  if (location.pathname !== '/grade/total') navigate('/grade/total');
                }}
              >
                학년별 평균 전체학점
              </button>
            </li>
          </ul>
        </li>

        {/* 전공학점 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">전공학점</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'majorMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('majorMajor');
                  if (location.pathname !== '/grade/major') navigate('/grade/major');
                }}
              >
                학과별 평균 전공학점
              </button>
            </li>
            <li>
              <button
                className={selected === 'majorYear' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('majorYear');
                  if (location.pathname !== '/grade/major') navigate('/grade/major');
                }}
              >
                학년별 평균 전공학점
              </button>
            </li>
          </ul>
        </li>

        {/* 교양학점 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">교양학점</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'generalMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('generalMajor');
                  if (location.pathname !== '/grade/general') navigate('/grade/general');
                }}
              >
                학과별 평균 교양학점
              </button>
            </li>
            <li>
              <button
                className={selected === 'generalYear' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('generalYear');
                  if (location.pathname !== '/grade/general') navigate('/grade/general');
                }}
              >
                학년별 평균 교양학점
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default GradeSidebar;
