import React from 'react';
import './aboutus.css';
import vid from '../../assets/EdVideo.mp4';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Aboutus = () => {

// video playing logic
  const [playVideo,setPlayVideo]=React.useState(false);
  const vidRef=React.useRef();
  const handleVideo=()=>{
    setPlayVideo((prevPlayVideo)=> !prevPlayVideo)
    if(playVideo){
        vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
  }


  return (
    <div className='container app__aboutus' id='AboutUs'>


      <div className='app__aboutus_videoside'>
        <div className='app__video'>
          <video
          src={vid}
          ref={vidRef}
          type="video/mp4"
          Loop
          controls={false}
          muted
          style={{ background: 'fff' }}
          />
          <div className="app__video-overlay flex__center">
            <div 
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
            >
                {playVideo
                ?(
                  <BsPauseFill color='#fff' fontSize={30}/>
                ):<BsFillPlayFill color='#fff' fontSize={30}/>}
            </div>
          </div>
        </div>
      </div>



      
      <div className='app__aboutus_contentside'>
        <p>ABOUT UNIVERSITY</p>
        <h1>Nurturing Tomorrow's Leaders Today</h1>
        <p>Education is the cornerstone of society, providing individuals with the knowledge, skills, and opportunities to thrive in an ever-changing world. At its core, education is about empowerment, enabling individuals to unlock their full potential and pursue their passions.</p>
        <p>It encompasses formal learning in schools, colleges, and universities, as well as informal learning through life experiences and interactions. Education equips individuals with critical thinking abilities, problem-solving skills, and a thirst for lifelong learning.  </p>
        <p>Moreover, education promotes social cohesion, tolerance, and empathy, laying the foundation for a more equitable and sustainable future.</p>
      </div>
    </div>
  );
};

export default Aboutus;
