import React, { createContext,useState,useEffect } from 'react'

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([])
useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then(response => response.json())
    .then(data => {
      const updatedData = data.results.map(item => ({
        ...item,
        selected: false // Agrega aquí la nueva propiedad
      }));
      setData(updatedData);
      console.log(updatedData);
    })
    .catch(error => console.error("Error get service", error));
}, []);
  return(
    <DataContext.Provider value={{data,setData}}>
      {children}
    </DataContext.Provider>
  )
}