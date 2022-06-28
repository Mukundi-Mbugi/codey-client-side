import React from "react";
import Blog from "../Blog/Blog";

function Blogs({ blogs, onDelete, onBlogUpdate }) {

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div  className="card horizontal">
            <Blog blog={blog} onDelete={onDelete} onBlogUpdate={onBlogUpdate} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
