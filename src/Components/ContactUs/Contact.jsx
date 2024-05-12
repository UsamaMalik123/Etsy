import React from 'react'
import './contact.css'
import emailicon from '../../assets/emailicon.png'
import yellowemail from '../../assets/yellowemail.png'
import callicon from '../../assets/callicon.png'
import locationicon from '../../assets/locationicon.png'
const Contact = () => {
  return (
    <div className=' container  app__contact'>
       
        <p>Contact Us</p>
        <h1 style={{color:'#232D3E'}}>Get In Touch</h1>
        <div className='app__contact_content-section'>
            <div className='app__leftside'>
                <div className='app__contact__sendmessage'>
                    <p style={{fontWeight:'bold',color:'#232D3E'}}>Send Us a message</p>
                    <img src={yellowemail}/>
                </div>
                <p style={{fontSize:'14px'}}>Have a question, comment, or just want to say hello? I'd love to hear from you! Drop me a message using the form below, and I'll get back to you as soon as possible. Your feedback matters, and I'm here to assist you in any way I can</p>
                <div className='app__contact__details-section'>
                <img src={emailicon}/>
                    <p>usama.malik123@live.com</p>
                </div>
                <div className='app__contact__details-section'>
                    <img src={callicon}/>
                    <p>+929292929292</p>
                </div>

                <div className='app__contact__details-section'>
                    <img src={locationicon}/>
                    <p>karl max, Berlin.</p>
                </div>

            </div>
            
             <div className="app__getintouch-rightside">
                

                    <div className='app__getintouch-input-fields'>
                        <p style={{gap:'0px'}}>Your Name</p>
                        <input
                        type="text"
                        placeholder="First Name"
                        className="custom-input"
                        />
                    
                    </div>

                    <div className='app__getintouch-input-fields'>
                        <p>Phone Number</p>
                        <input
                        type="phone"
                        placeholder="Phone Number"
                        className="custom-input"
                        />
                    </div>

                    <div className="app__getintouch-texbox-btn">
                        <p>Write Your message here</p>
                        <textarea
                        placeholder="Message"
                        className="custom-textarea"
                        />
                        <button className="send-button">Send</button>
                    </div>

              
            </div>    
        </div>
    
    

  </div>
  )
}

export default Contact