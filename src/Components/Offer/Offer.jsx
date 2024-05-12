import React from 'react';
import './offer.css';
import img1 from '../../assets/degree (1).jpg';
import img2 from '../../assets/degree (2).jpg';
import img3 from '../../assets/degree (3).jpg';
import icon from '../../assets/nike.png';

const Offer = () => {
  return (
    <div className='container app__offer' id='Program'>
      <p>OUR PROGRAM</p>
      <h1>What We Offer</h1>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={img1} alt='sam' />
          <div className="overlay">
            <img className="overlay_img" src={icon} alt='icon' />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={img2} alt='sam' />
          <div className="overlay">
            <img className="overlay_img" src={icon} alt='icon' />
            <p>Master Degree</p>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={img3} alt='sam' />
          <div className="overlay">
            <img className="overlay_img" src={icon} alt='icon' />
            <p>Post Graduate Degree</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer;
