import React from 'react'
import Navbar from '../components/Navbar'
import '../components/manufacturer.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home'>
        <h1>Welcome to My Website</h1>
        <p>Please sign in or register to use this website.</p>
      </div>

    </div>
  )
}

export default Home