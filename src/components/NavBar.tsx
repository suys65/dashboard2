import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavBar = ({ isOpen, onClose }: NavBarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [openedMenus, setOpenedMenus] = useState<Set<number>>(new Set());

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/login');
  };

  const menuItems = [
    {
      name: '입학',
      path: '/admission/freshman-recruit',
      submenu: [
        { name: '신입생 충원', path: '/admission/freshman-recruit' },
        { name: '신입생 성적', path: '/admission/freshman-grade' }
      ]
    },
    {
      name: '학적',
      path: '/academic/leave-return',
      submenu: [
        { name: '휴/복학', path: '/academic/leave-return' },
        { name: '자퇴', path: '/academic/dropout' },
        { name: '전과', path: '/academic/transfer' },
        { name: '복수/부전공', path: '/academic/double-major' },
        { name: '연계/융합전공', path: '/academic/interdisciplinary' }
      ]
    },
    {
      name: '성적',
      path: '/grade/total',
      submenu: [
        { name: '전체 학점', path: '/grade/total' },
        { name: '전공 학점', path: '/grade/major' },
        { name: '교양 학점', path: '/grade/general' }
      ]
    },
    {
      name: '졸업',
      path: '/graduate/undergrad',
      submenu: [
        { name: '졸업생', path: '/graduate/undergrad' },
        { name: '대학원', path: '/graduate/grad-school' }
      ]
    },
    {
      name: '기타',
      path: '/etc/edu-satisfaction',
      submenu: [
        { name: '교육 만족도', path: '/etc/edu-satisfaction' },
        { name: '교직원 현황', path: '/etc/staff' }
      ]
    }
  ];

  const handleMenuClick = (index: number, e: React.MouseEvent) => {
    // 768px 이하에서만 서브메뉴 토글 (페이지 이동 안 함)
    if (window.innerWidth <= 768) {
      e.preventDefault();
      // 이미 열려있으면 닫고, 닫혀있으면 열기 (다른 메뉴는 유지)
      const newOpenedMenus = new Set(openedMenus);
      if (newOpenedMenus.has(index)) {
        newOpenedMenus.delete(index);
      } else {
        newOpenedMenus.add(index);
      }
      setOpenedMenus(newOpenedMenus);
    } else {
      // 데스크톱에서는 정상 동작
      onClose();
    }
  };

  const handleSubmenuClick = () => {
    onClose();
    setOpenedMenus(new Set());
  };

  const getMenuPath = (item: typeof menuItems[0]) => {
    // 데스크톱: 현재 경로가 이 메뉴 아래에 있으면 유지, 아니면 첫 번째 하위메뉴로
    // 768px 이하: 클릭 시 서브메뉴만 열리도록 하기 위해 '#' 반환
    if (window.innerWidth <= 768) {
      return '#';
    }
    const pathPrefix = item.path.split('/').slice(0, 2).join('/');
    return location.pathname.startsWith(pathPrefix) ? location.pathname : item.path;
  };

  return (
    <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
      {/* 모바일 사용자 섹션 (CSS로 표시/숨김 제어) */}
      {user && (
        <div className="mobile-user-section">
          <div className="mobile-user-info">
            <span className="mobile-user-name">{user.studentId}님</span>
            <button onClick={handleLogout} className="mobile-logout-btn">
              로그아웃
            </button>
          </div>
        </div>
      )}
      
      <ul className="nav-menu">
        {menuItems.map((item, index) => {
          const isActive = location.pathname.startsWith(item.path.split('/').slice(0, 2).join('/'));
          const isMenuOpen = openedMenus.has(index);
          
          return (
            <li 
              key={item.name} 
              className={`nav-item ${isActive ? 'active' : ''} ${isMenuOpen ? 'open' : ''}`}
            >
              <Link 
                to={getMenuPath(item)} 
                className="nav-link"
                onClick={(e) => handleMenuClick(index, e)}
              >
                <span>{item.name}</span>
              </Link>
              <ul className="nav-dropdown">
                {item.submenu.map((subItem) => (
                  <li key={subItem.name}>
                    <Link 
                      to={subItem.path} 
                      className="nav-dropdown-link"
                      onClick={handleSubmenuClick}
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
