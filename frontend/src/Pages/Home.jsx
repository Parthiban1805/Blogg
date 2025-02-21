import React from 'react'
import Recentpost from '../Components/Recentpost'

const Home = () => {
  return (
    <>
     <div className="container-fluid bg-dark hero-section text-center">
        <h1 className="fs-0.5 fw-bold text-light">Welcome to Robotics and Automation Lab</h1>
        <p className="text-light fs-4 mt-3">
        The Future of  Robotics & Automation Innovations from Our Lab
        </p>
      </div>    
    
    <div className='container-fluid'>
       <Recentpost/>
       
    </div>
    </>
  )
}

export default Home
