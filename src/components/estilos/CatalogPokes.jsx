import React, { useContext, useState } from 'react'
import { DataContext } from '../DataContext'
import Pokemon from './Pokemon'

function CatalogPokes() {
  const {data, setData} = useContext(DataContext)
    return (
   <>
   <div className='pokes'>
        {
            data.map(
                (item,index) =>(
                    <Pokemon key={index} item={item} index={index}/>
                )
            )
        }
   </div>

   </>
  )
}

export default CatalogPokes