import xIcon from '../assets/Icono-de-muerto.png';
import checkIcon from '../assets/Icono-de-vivo.png';
import imgIcon from '../assets/Icono-imagen.png';

const Tabla = ({ data }) => {
  return (
    <div className="table__container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Vivo</th>
            <th>Especie</th>
            <th>Genero</th>
            <th>Origen</th>
            <th>Locación</th>
            <th>Capitulos</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((personaje) => (
            <tr className="table__row" key={personaje.id}>
              <td>{personaje.name}</td>
              <td>
                <img src={personaje.status === 'Alive' ? checkIcon : xIcon} />
              </td>
              <td>{personaje.species}</td>
              <td>{personaje.gender}</td>
              <td>{personaje.origin.name}</td>
              <td>{personaje.location.name}</td>
              <td>{personaje.episode.length}</td>
              <td>{personaje.created.slice(0, 10)}</td>
              <td className="table__item subitem--gray">
                <a href={personaje.image} rel="noopener noreferrer" target="_blank">
                  <img src={imgIcon} />
                </a>
                Acciones
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Tabla;
