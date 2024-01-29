import { Link } from 'react-router-dom';
import { NavbarList } from '../model/selector/getNavbarList';

export const Navbar = () => (
  <header>
    <menu>
      <ul>
        {NavbarList.map((item) => (
          <li>
            <Link key={item.path} to={item.path}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </menu>
  </header>
);
