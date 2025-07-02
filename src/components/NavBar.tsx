import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul className="nav">
      <li><Link to="/admission" className="nav-btn">입학</Link></li>
      <li><Link to="/academic" className="nav-btn">학적</Link></li>
      <li><Link to="/grade" className="nav-btn">성적</Link></li>
      <li><Link to="/graduate" className="nav-btn">졸업</Link></li>
      <li><Link to="/etc" className="nav-btn">기타</Link></li>
    </ul>
  </nav>
);
export default NavBar;
