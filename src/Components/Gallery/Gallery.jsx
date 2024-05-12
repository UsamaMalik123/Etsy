import React from 'react'
import './gallery.css'
import phot1 from '../../assets/campus (1).jpg'
import phot2 from '../../assets/campus (2).jpg'
import phot3 from '../../assets/campus (3).jpg'
import phot4 from '../../assets/campus (4).jpg'
import arrow from '../../assets/rightArrow.png'

const Gallery = () => {
  return (
    <div className='container app__gallery' id='Campus'> 
        
        <p>Gallery</p>
        <h1>Campus Photos</h1>

        
        <div className="image-grid">
            <img src={phot1} alt="Photo 1" />
            <img src={phot2} alt="Photo 1" />
            <img src={phot3} alt="Photo 1" />
            <img src={phot4} alt="Photo 1" />
        
        </div>
        <div className='app__gallery-custom-button'>
         See More Here <img src={arrow} alt='Arrow Icon' className='arrow-icon' />
        </div>

    </div>
  )
}

export default Gallery