import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav id="navbar">
    <ul>
      <li><NavLink activeClassName="active" to="home">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="calc">Calculator</NavLink></li>
      <li><NavLink activeClassName="active" to="quote">Quote</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
