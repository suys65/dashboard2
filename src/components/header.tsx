// src/components/Header.tsx
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import NavBar from './NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname.startsWith('/login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 모바일 메뉴 열렸을 때 body 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  // 페이지 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // 화면 크기 변경 시 모바일 메뉴 자동 닫기 (1300px 이상으로 커질 때)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1300 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo-section">
            <img
              src={logo}
              alt="인천대학교 로고"
              className="logo-img"
              onClick={handleLogoClick}
              style={{
                cursor: 'pointer',
                transition: 'opacity 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            />
          </div>
          
          {!isLoginPage && (
            <>
              <NavBar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
              
              {/* 레이아웃 유지용 빈 공간 */}
              <div className="header-right"></div>

              {/* 햄버거 메뉴 버튼 */}
              <button 
                className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="메뉴"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </>
          )}
        </div>
      </header>

      {/* 모바일 오버레이 */}
      {!isLoginPage && (
        <div 
          className={`mobile-overlay ${isMobileMenuOpen ? 'show' : ''}`}
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
