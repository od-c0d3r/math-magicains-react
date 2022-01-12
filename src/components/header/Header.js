import './Header.scss';
import Navbar from '../navbar/Navbar';

const Header = () => (
  <header id="appHeader">
    <span id="logo">
      LIFE
      <sub>
        OF
      </sub>
      PI
    </span>
    <Navbar />
  </header>
);

export default Header;
