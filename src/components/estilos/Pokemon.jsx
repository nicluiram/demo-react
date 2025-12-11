import React from 'react'
import ImageDetail from '../lists/ImageDetail'
import './Pokemon.css';

const Pokemon = ({item,index}) => {
  return (
    <>
    <div className="item">
        <h2>Pokemon #{index+1} </h2>
        <ImageDetail url={item.url}/>
        <span>{item.name}</span>
    </div>
    </>
  )
}

export default Pokemon