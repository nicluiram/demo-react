import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
import ImageDetail from './ImageDetail'

function ListaCarrito () {
  const {data,setData} = useContext(DataContext)
  const removeItem = (item) => {
        const name = item.name; // Accede correctamente al nombre del Pokémon
        setData(prevData =>
            prevData.map(pokemon =>
                pokemon.name === name
                    ? { ...pokemon, selected: false } // Actualiza la propiedad selected
                    : pokemon
            )
        );
    };
    const filterData = data.filter(item => item.selected === true)

  return (
      <div className='col-md-9'>
        <h2>Pokemon Elegidos</h2>
        <div className='row'>
            {filterData.map((item,index) =>(
              <div className='col-md-4 mb-4' key={index}>
                <div className='card'>
                  <div className='card-body'>
                      <ImageDetail url={item.url}/>
                    <h5 className='card-title'>{item.name}</h5>
                    <button className='btn btn-primary' onClick={() =>{removeItem(item)}}>Remover equipo</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
  )
}

export default ListaCarrito