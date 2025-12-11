import React, { useContext } from 'react'
import PokeItem from './PokeItem'
import { DataContext } from '../DataContext'
import ImageDetail from './ImageDetail'

function Catalog() {
    const { data, setData } = useContext(DataContext)
    const clickAction = (item) => {
        const name = item.name; // Accede correctamente al nombre del Pokémon
        setData(prevData =>
            prevData.map(pokemon =>
                pokemon.name === name
                    ? { ...pokemon, selected: true } // Actualiza la propiedad selected
                    : pokemon
            )
        );
    };
    return (
        <div className='col-md-9'>
            <h2>Seleccionar Pokemon</h2>
            <div className='row'>
                {data.map((item, index) => (
                    <div className='col-md-4 mb-4' key={index}>
                        <div className='card'>
                            <div className='card-body'>
                                <ImageDetail url={item.url} />
                                <h5 className='card-title'>{item.name}</h5>
                                <button className='btn btn-success' onClick={() => {clickAction(item)}}>Agregar a equipo</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Catalog