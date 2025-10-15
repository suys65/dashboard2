// src/components/Header.tsx
import logo from '../assets/logo.png';
import NavBar from './NavBar';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith('/login');

  return (
    <header>
      <div className="header-content">
        <div className="logo-section">
          <img
            src={logo}
            alt="인천대학교 로고"
            className="logo-img"
          />
        </div>
        
        {!isLoginPage && (
          <>
            <NavBar />
            <div className="header-right">
              <Link to="/signup" className="signup-link">회원가입</Link>
              <Link to="/login" className="login-btn">로그인</Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
