import React from "react";
import Blog from "../Blog/Blog";
import './Blogs.css'

function Blogs({ blogs, onDelete, onBlogUpdate, onBlogLike }) {

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div  className="card horizontal">
            <Blog blog={blog} onDelete={onDelete} onBlogUpdate={onBlogUpdate} 
            onBlogLike={onBlogLike}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
