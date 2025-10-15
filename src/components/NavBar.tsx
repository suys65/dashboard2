import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: '입학',
      path: '/admission/freshman-recruit', // 첫 번째 하위메뉴로 자동 이동
      submenu: [
        { name: '신입생 충원', path: '/admission/freshman-recruit' },
        { name: '신입생 성적', path: '/admission/freshman-grade' }
      ]
    },
    {
      name: '학적',
      path: '/academic/leave-return', // 첫 번째 하위메뉴로 자동 이동
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
      path: '/grade/total', // 첫 번째 하위메뉴로 자동 이동
      submenu: [
        { name: '전체 학점', path: '/grade/total' },
        { name: '전공 학점', path: '/grade/major' },
        { name: '교양 학점', path: '/grade/general' }
      ]
    },
    {
      name: '졸업',
      path: '/graduate/undergrad', // 첫 번째 하위메뉴로 자동 이동
      submenu: [
        { name: '졸업생', path: '/graduate/undergrad' },
        { name: '대학원', path: '/graduate/grad-school' }
      ]
    },
    {
      name: '기타',
      path: '/etc/edu-satisfaction', // 첫 번째 하위메뉴로 자동 이동
      submenu: [
        { name: '교육 만족도', path: '/etc/edu-satisfaction' },
        { name: '교직원 현황', path: '/etc/staff' }
      ]
    }
  ];

  return (
    <nav className="main-nav">
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.name} className={`nav-item ${location.pathname.startsWith(item.path) ? 'active' : ''}`}>
            <Link to={item.path} className="nav-link">
              {item.name}
            </Link>
            <ul className="nav-dropdown">
              {item.submenu.map((subItem) => (
                <li key={subItem.name}>
                  <Link to={subItem.path} className="nav-dropdown-link">
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
