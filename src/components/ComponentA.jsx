import React from 'react'
import ComponenteC from './ComponenteC'

export default function ComponentA({emoji, titulo}) {
  return (
  <>
      <div className='container'>
        <ComponenteC emoji={emoji}/>
        <div><p>{titulo}</p></div>
      </div>
  </>
  )
}

export { ComponentA }