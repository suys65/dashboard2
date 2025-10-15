// src/components/Header.tsx
import logo from '../assets/logo.png';
import NavBar from './NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const isLoginPage = location.pathname.startsWith('/login');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
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
            <NavBar />
            <div className="header-right">
              {user && (
                <span style={{
                  marginRight: '15px',
                  fontSize: '14px',
                  color: '#333',
                  fontWeight: '500'
                }}>
                  {user.studentId}님
                </span>
              )}
              <button 
                onClick={handleLogout}
                className="logout-btn"
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                로그아웃
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
