import checkIcon from '../assets/Icono-de-vivo.png';
import camaraIcon from '../assets/camera-movie.png';
import xIcon from '../assets/Icono-de-muerto.png';
import searchIncon from '../assets/Icono-de-busqueda.png';

const Header = ({ info, data }) => {
  let vivos = data.filter((item) => item.status === 'Alive');
  let muertos = data.filter((item) => item.status !== 'Alive');
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
          <b className="header__number subitem--gray">{!info.count ? '0' : info.count}</b>
        </div>
        <div className="header__subitem">
          <img src={checkIcon} />
          <span>Personajes vivos</span>
          <b className="header__number">{!vivos ? '0' : vivos.length}</b>
          <span className="header__space subitem--gray ">|</span>
          <img src={xIcon} />
          <span>Personajes Muertos</span>
          <b className="header__number">{!muertos ? '0' : muertos.length}</b>
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
