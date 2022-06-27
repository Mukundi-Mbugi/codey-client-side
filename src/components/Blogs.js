import React, {useEffect,useState} from 'react'
import Blog from './Blog'

function Blogs() {
    const [blogs, setBlogs] = useState([])

   
    useEffect(() => {
        fetch("https://codeyblogs.herokuapp.com/")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
  return (
    <div>
        {blogs.map((blog,index)=>(
            <div key={index} className="card horizontal">
            <Blog blog={blog}  />
          </div>
        ))}
      
    </div>
  )
}

export default Blogs
