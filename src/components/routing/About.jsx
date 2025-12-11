import React from 'react'
import { Content } from './Content'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const navigateToHome = () =>{
        navigate('/')
    }

  return (
    <>
        <h1>About</h1>
        <Content/>
        <Content/>
        <Content/>
        <Content/>
        <button onClick={navigateToHome} className='btn btn-info'>Home</button>
    </>
  )
}

export default About