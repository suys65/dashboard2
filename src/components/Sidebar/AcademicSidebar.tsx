// src/components/Sidebar/AcademicSidebar.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type SelectedType = 
  | 'leaveMajor' | 'leaveGrade'
  | 'dropoutMajor' | 'dropoutGrade'
  | 'transferInMajor' | 'transferOutMajor' | 'transferInGrade' | 'transferOutGrade'
  | 'doubleApplyMajor' | 'doubleBelongMajor' | 'doubleApplyGrade' | 'doubleBelongGrade'
  | 'interMajor' | 'interBelongMajor' | 'interMajorGrade' | 'interBelongGrade';

type Props = {
  submenu: 'leave' | 'dropout' | 'transfer' | 'double' | 'inter';
  selected: SelectedType;
  onSelect: (key: SelectedType) => void;
};

const AcademicSidebar: React.FC<Props> = ({ submenu, selected, onSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar active" id="academic-sidebar">
      <h2>학적</h2>
      <ul>
        {/* 휴복학 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">휴복학</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'leaveMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('leaveMajor');
                  if (location.pathname !== '/academic/leave-return') navigate('/academic/leave-return');
                }}
              >
                학과별 휴복학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'leaveGrade' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('leaveGrade');
                  if (location.pathname !== '/academic/leave-return') navigate('/academic/leave-return');
                }}
              >
                학년별 휴복학생 수
              </button>
            </li>
          </ul>
        </li>

        {/* 자퇴 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">자퇴</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'dropoutMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('dropoutMajor');
                  if (location.pathname !== '/academic/dropout') navigate('/academic/dropout');
                }}
              >
                학과별 자퇴생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'dropoutGrade' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('dropoutGrade');
                  if (location.pathname !== '/academic/dropout') navigate('/academic/dropout');
                }}
              >
                학년별 자퇴생 수
              </button>
            </li>
          </ul>
        </li>

        {/* 전과 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">전과</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'transferInMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('transferInMajor');
                  if (location.pathname !== '/academic/transfer') navigate('/academic/transfer');
                }}
              >
                학과별 전입 학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'transferOutMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('transferOutMajor');
                  if (location.pathname !== '/academic/transfer') navigate('/academic/transfer');
                }}
              >
                학과별 전출 학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'transferInGrade' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('transferInGrade');
                  if (location.pathname !== '/academic/transfer') navigate('/academic/transfer');
                }}
              >
                학년별 전입 학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'transferOutGrade' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('transferOutGrade');
                  if (location.pathname !== '/academic/transfer') navigate('/academic/transfer');
                }}
              >
                학년별 전출 학생 수
              </button>
            </li>
          </ul>
        </li>

        {/* 부복수전공 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">부복수전공</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'doubleApplyMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('doubleApplyMajor');
                  if (location.pathname !== '/academic/double-major') navigate('/academic/double-major');
                }}
              >
                신청학과별 학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'doubleBelongMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('doubleBelongMajor');
                  if (location.pathname !== '/academic/double-major') navigate('/academic/double-major');
                }}
              >
                소속학과별 학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'doubleApplyGrade' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('doubleApplyGrade');
                  if (location.pathname !== '/academic/double-major') navigate('/academic/double-major');
                }}
              >
                신청학과-학년별 학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'doubleBelongGrade' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('doubleBelongGrade');
                  if (location.pathname !== '/academic/double-major') navigate('/academic/double-major');
                }}
              >
                소속학과-학년별 학생 수
              </button>
            </li>
          </ul>
        </li>

        {/* 연계융합전공 */}
        <li className="sidebar-section">
          <div className="sidebar-section-title">연계융합전공</div>
          <ul className="sidebar-submenu" style={{ display: 'block' }}>
            <li>
              <button
                className={selected === 'interMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('interMajor');
                  if (location.pathname !== '/academic/interdisciplinary') navigate('/academic/interdisciplinary');
                }}
              >
                연계/융합전공별 학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'interBelongMajor' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('interBelongMajor');
                  if (location.pathname !== '/academic/interdisciplinary') navigate('/academic/interdisciplinary');
                }}
              >
                소속전공별 학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'interMajorGrade' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('interMajorGrade');
                  if (location.pathname !== '/academic/interdisciplinary') navigate('/academic/interdisciplinary');
                }}
              >
                연계/융합전공-학년별 학생 수
              </button>
            </li>
            <li>
              <button
                className={selected === 'interBelongGrade' ? 'sidebar-submenu-btn-active' : 'sidebar-submenu-btn'}
                onClick={() => {
                  onSelect('interBelongGrade');
                  if (location.pathname !== '/academic/interdisciplinary') navigate('/academic/interdisciplinary');
                }}
              >
                소속학과-학년별 학생 수
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default AcademicSidebar;
