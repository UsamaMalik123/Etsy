import React from 'react'
import './hero.css'
import arrow from '../../assets/rightArrow.png'
import forward from '../../assets/forwardicon.png'
const Hero = () => {
  return (
    <div className='app__hero' id='home'>
       <h1>We Ensure Better Education for a better world</h1> 
       <p>Our cutting-edge curriculm is designed to empower students with the knowledge, skills 
            and experience needed to excel in the dynamic field of education.
       </p>
       <div>
       <div className='custom-button'>
         Explore Now <img src={forward} alt='Arrow Icon' className='arrow-icon' />
        </div>
       </div>
    </div>
  )
}

export default Hero