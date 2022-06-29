import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Blogs from "../Blogs/Blogs";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://codeyblogs.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  function handleDelete(id) {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  }
  function handlePost(updatedBlogs) {
    const updatedBlogObj = [...blogs, updatedBlogs];
    setBlogs(updatedBlogObj);
  }
  function handleUpdate(editedBlogs) {
    const updatedBlogObj = blogs.map((blog) => {
      if (blog.id === editedBlogs.id) {
        return editedBlogs;
      }
      return blog;
    });
    setBlogs(updatedBlogObj);
  }

  function handleLike(id) {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return { ...blog, likes: blog.likes + 1 };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
  }

  return (
    <div className="container">
      <Blogs
        blogs={blogs}
        onDelete={handleDelete}
        onBlogUpdate={handleUpdate}
        onBlogLike={handleLike}
      />

      <Form onUpdate={handlePost} />
    </div>
  );
}

export default Home;
