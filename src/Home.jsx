import { Link } from 'react-router-dom'

//Genero la home con las propiedades que me he traido desde app.jsx 
const Home = ({data}) => {
  return (
    <>
      <h2>Lista de datos</h2>
      <ul>
        {/*Recorro el array de objetos que me he traido y muestro el id y el title recorriendo data*/}
        {/*El id lo uso como key para que no me de error en la consola*/}
        {data.map(item => (
          <li key={item._id}>
            <Link to={`/${item._id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Home;
