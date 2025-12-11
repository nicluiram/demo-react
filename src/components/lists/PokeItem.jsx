import React from 'react'
import ImageDetail from './ImageDetail'

function PokeItem({ item, id }) {
    return (
        <div className='card h-100'>
            <ImageDetail url={item.url}/>
            <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
            </div>
        </div>
    )
}

export default PokeItem