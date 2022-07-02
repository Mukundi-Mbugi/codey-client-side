import React from "react";
import Blog from "../Blog/Blog";
import Navbar from "../Navbar/Navbar";
import "./Blogs.css";

function Blogs({ blogs, onDelete, onBlogUpdate, onBlogLike, search, onSearchChange, clickSearch }) {
  
  

  return (
    <div className="display-blogs">
      <Navbar />
      <div className="search-div">
        <input type="text" placeholder="search" 
        value={search}
        onChange={(e) => onSearchChange(e.target.value)} />
        <i
          className="icon small material-icons teal-text"
          onClick={clickSearch}
        >
          search
        </i>
      </div>
      {blogs.map((blog, index) => (
        <div key={index} className="card">
          <Blog
            blog={blog}
            onDelete={onDelete}
            onBlogUpdate={onBlogUpdate}
            onBlogLike={onBlogLike}
          />
        </div>
      ))}
    </div>
  );
}

export default Blogs;
