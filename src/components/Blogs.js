import React, {useEffect,useState} from 'react'

function Blogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/posts")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
  return (
    <div>
        {blogs.map((blog,index)=>(
            <div key={index} className="card horizontal">
            <div className="">
              <div className="card-content">
                <h5 className="black-text text-lighten-1">
                  I{blog.title}
                </h5>
                <p className="black-text text-lighten-1">
                  {blog.body}
                </p>
              </div>
              <div className="card-action">
                <h6>{`by: ${blog.author.name}`}</h6>
                <i className="small material-icons teal-text">delete</i>
                <i className="small material-icons teal-text lighten-2">
                  create
                </i>
              </div>
            </div>
          </div>
        ))}
      
    </div>
  )
}

export default Blogs
