import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import EditPost from "../Edit/EditPost";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://codeyblogs.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  function handleUpdateBlog(updatedBlogObj) {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === updatedBlogObj.id) {
        return updatedBlogObj;
      } else {
        return Blog;
      }
    });
    setBlogs(updatedBlogs);
  }

  return (
    <div>
      {blogs.map((blog, index) => (
        <div>
          <div key={index} className="card horizontal">
            <Blog blog={blog} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
