import logo from '../assets/Logo-RandM.png';
import bellIcon from '../assets/Icono-de-campana.png';
import house from '../assets/Home.png';

const Navbar = () => {
  return (
    <div className="navbar__container">
      <img src={logo} alt="logo" />
      <div className="navbar__right">
        <img src={bellIcon} alt="home" />
        <img src={house} alt="notifications" />
      </div>
    </div>
  );
};

export default Navbar;
