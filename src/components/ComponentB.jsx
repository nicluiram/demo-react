import React from 'react'

export default function ComponentB({texto, onClick}) {
    const manageClick = () =>{
      alert("Click")   
    }
    const  miValor = "Datos desde componente hijo"
  
  return (
    <div>
      <button 
        onClick={
          () => {onClick(miValor)}}>
            {texto}
      </button>
    </div>
  )
}

export { ComponentB }