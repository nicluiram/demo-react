import React, { useEffect, useState } from 'react'
import { Content } from './Content'
import { Link } from 'react-router-dom';

const Home = () => {

    const [ pokemon, setPokemon ] = useState([])
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then(response => response.json())
            .then(data => {
                const updatedData = data.results.map((item,index) => ({
                    ...item,
                    selected: false,
                    id: index+1  // Agrega aquí la nueva propiedad
                }));
                setPokemon(updatedData);
                console.log(updatedData);
            })
            .catch(error => console.error("Error get service", error));
    }, [])
    return (
        <>
            <h1>Home</h1>
            <h2>Pokemon</h2>
            <ul className='list-group'>
                {
                    pokemon.map((item) =>(
                        <Link to={'/pokemon/'+ item.name} 
                                key={item.id} 
                                className='list-group-item list-group-item-action'>
                            {item.name}
                        </Link>
                    ))
                }
            </ul>
        </>
    )
}

export default Home