import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='container app__footer'>
      <div style={{ height: "1px", width: "100%", background: '#898989' }}></div>
      <div className='app__footer-context'>
        <p>@ 2024 Edusity. All rights reserved.</p>
        <div>
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
