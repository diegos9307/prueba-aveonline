import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Tabla from './components/Tabla';

function App() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    let url = 'https://rickandmortyapi.com/api/character';
    const getData = async (url) => {
      try {
        const data = await fetch(url);
        if (!data.ok) {
          throw {
            err: true,
            status: data.status,
            statusText: 'UPS! Ha ocurrido un error en la peticion'
          };
        }
        const json = await data.json();
        setData(json.results);
        setInfo(json.info);
      } catch (err) {
        setError(err);
      }
    };
    getData(url);
  }, []);

  return (
    <div>
      <Navbar />
      {data.length === 0 ? (
        <h2 className="subtitle">{error.statusText}</h2>
      ) : (
        <Header info={info} data={data} />
      )}
      {data.length === 0 ? <br></br> : <Tabla data={data} />}
    </div>
  );
}

export default App;
