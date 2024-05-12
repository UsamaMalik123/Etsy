import React from 'react'
import './review.css'
const Review = (props) => {
  return (
    <div className=' app__review'>
        <div className='app__review_container'>
            <img src={props.img}/>
            <div>
                <p >{props.name}</p>
                <p style={{color:'gray',fontWeight:'normal'}}>{props.location}</p>
            </div>
        </div>
        <p className="app__review_reviews"style={{color:'gray',fontWeight:'normal'}}>{props.review}</p>
    </div>
  )
}

export default Review