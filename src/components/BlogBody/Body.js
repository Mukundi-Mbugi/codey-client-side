import React, { useState } from 'react'
import './Body.css'

function Body({ blog }) {
    const [readMore, setReadMore] = useState(false);
    let body = blog.body
    
    const toggleReadMore = () => {
        setReadMore(prevState => !prevState)
    }
   
  return (
    <div>
        <div className="card-content">
            {readMore ?  <p>{body}</p> : body.substring(0, 100)}
            <button className='toggle-read-btn' onClick={toggleReadMore} >{!readMore ? '..read more' : 'read less'}</button>
        </div>
    </div>
  )
}

export default Body