import checkIcon from '../assets/Icono-de-vivo.png';
import camaraIcon from '../assets/camera-movie.png';
import xIcon from '../assets/Icono-de-muerto.png';
import searchIncon from '../assets/Icono-de-busqueda.png';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__title">
        <h1>
          <img className="header__imgtitle" src={camaraIcon} />
          Personajes
        </h1>
      </div>
      <div className="header__subline">
        <div className="header__subitem">
          <span>Total de personajes</span>
          <b className="header__number subitem--gray">75</b>
        </div>
        <div className="header__subitem">
          <img src={checkIcon} />
          <span>Personajes vivos</span>
          <b className="header__number">22</b>
          <span className="header__space subitem--gray ">|</span>
          <img src={xIcon} />
          <span>Personajes Muertos</span>
          <b className="header__number">0</b>
        </div>
        <div className="header__subitem subitem--radiusgray">
          <img src={searchIncon} />
          <input type="text" placeholder="Buscar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
