import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav id="navbar">
    <ul>
      <li><NavLink activeclassname="active" to="home">Home</NavLink></li>
      <li><NavLink activeclassname="active" to="calc">Calculator</NavLink></li>
      <li><NavLink activeclassname="active" to="quote">Quote</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
