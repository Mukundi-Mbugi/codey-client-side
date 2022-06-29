import React, { useState } from 'react'
import './Body.css'

function Body({ blog }) {
    const [readMore, setReadMore] = useState(false);
    const body = blog.body
    
    const toggleReadMore = () => {
        setReadMore(prevState => !prevState)
    }
   
  return (
    <div>
        <div className="card-content">
            {readMore ?  body : body.substring(0, 200)}
            <button className='toggle-read-btn' onClick={toggleReadMore} >...read more</button>
        </div>
    </div>
  )
}

export default Body