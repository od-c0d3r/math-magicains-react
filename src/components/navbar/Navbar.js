import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav id="navbar">
    <ul>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/calc">Calculator</NavLink></li>
      <li><NavLink to="/quote">Quote</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
