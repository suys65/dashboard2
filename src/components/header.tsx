// src/components/Header.tsx
import logo from '../assets/logo.png';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          alt="국립 인천대학교 로고"
          style={{ cursor: 'pointer' }}
          onClick={() => window.location.href = '/'}
        />
      </div>  
      <NavBar />
    </header> 
  );
};  

export default Header;
