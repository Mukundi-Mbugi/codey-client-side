import React from "react";
import Blog from "../Blog/Blog";
import Navbar from "../Navbar/Navbar";
import "./Blogs.css";

function Blogs({ blogs, onDelete, onBlogUpdate, onBlogLike }) {
  function handleSearchClick() {
    console.log("search");
  }

  return (
    <div>
      <Navbar />
      <div className="search-div">
        <input type="text" placeholder="search" />
        <i
          className="icon small material-icons teal-text"
          onClick={handleSearchClick}
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
