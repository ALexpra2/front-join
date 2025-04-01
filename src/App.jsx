import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './Home.jsx'
import ItemDetailPage from './ItemDetailPage.jsx'

const App = () => {
  const [data, setData] = useState(null)
  const urlApi = 'http://localhost:3000'

  const fetchData = async () => {
    try {
      const response = await fetch(urlApi)
      const resData = await response.json()
      setData(resData)
    } catch (error) {
      console.log(error)
    }
  }
  // cargo fetch data la primera vez que se carga el componente

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Router>
      <div>
        <nav>
          <Link to= "/">Inicio</Link>
        </nav>
        {/*como data lo traigo asincrono porque lo introduzco setData(resData)=>data, tengo k hacer el cargando por si no han venido los datos todavia que no se rompa*/}
        {data === null
          ? ( <div>Cargando...</div>) 
          :
          (
            <Routes>
              <Route path="/" element={<Home data= {data} />} />
              {/*genero las rutas dinamicas con el id de cada una y cargo esas propiedades en el componente ItemDetailPage*/}
            {data.map(item => (
              <Route key={item._id} path={`/${item._id}`} element={<ItemDetailPage item={item} />} />
            ))}
            </Routes>
          )
        }
      </div>
    </Router>
  )
};

export default App;