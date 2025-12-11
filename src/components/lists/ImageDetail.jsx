import React, { useState,useEffect } from 'react'

function ImageDetail({url}) {
  
  const [data, setData] = useState({})
      useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error("Error get service", error))
      }, [url])
    return (
   <>
        <img src={data.sprites?.other?.home?.front_default} alt='pokemon' height='25%' width='25%' />
   </>
  )
}

export default ImageDetail