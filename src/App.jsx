import ContadorClase from './components/ContadorClase'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useCallback, useEffect, useState } from 'react'
import MyForm from './components/form/MyForm'
import Catalog from './components/lists/Catalog'
import ListaCarrito from './components/lists/ListaCarrito'
import { DataProvider } from './components/DataContext'
import CatalogPokes from './components/estilos/CatalogPokes'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/routing/Home'
import About from './components/routing/About'
import PokemonData from './components/routing/PokemonData'

function App() {
  const [mensaje, setMensaje] = useState("Un viaje")

  const parentClick = () => {
    setMensaje("Listo")
  }
  const callback = useCallback((datos) => {
    setMensaje(datos)
  }, [mensaje]
  )

  return (
    <>
      {/* <div className='box'>
      <ComponentA emoji="😗" titulo={mensaje}/>
      <ComponentB texto="hola mundo" onClick={parentClick}/>
      <ComponentB texto="callback" onClick={callback}/>
    </div> */}
      {/* <MyForm/> */}
      {/*Practica actualizar objetos con estado */}
      {/*       <DataProvider>
       <Catalog/>
        <ListaCarrito/>
      </DataProvider> */}

      {/*Practica css*/}
      {/*       <DataProvider>
        <CatalogPokes />
      </DataProvider> */}
      {/* ENRRUTADO*/}
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">demo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className='nav-link active' to='/'>Home </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link' to='/about'>About </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pokemon/:name' element={<PokemonData/>}/>
          </Routes>
        </div>

      </BrowserRouter>

    </>
  )
}

export default App
