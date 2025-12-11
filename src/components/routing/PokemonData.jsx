import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Content } from './Content'

const PokemonData = () => {

    const params = useParams()
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + params.name)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error get service", error))
    }, []);
    return (
        <>
            <div>
                <h1>{params.name}</h1>
                <img src={data.sprites?.other?.home?.front_default}/>
            </div>
        </>
    )
}

export default PokemonData