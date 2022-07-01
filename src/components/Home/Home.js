import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Blogs from "../Blogs/Blogs";
import Login from "../Login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function Home() {
  const [blogs, setBlogs] = useState([]);
  const [author, setAuthor] = useState([]);
  const [search, setSearch] = React.useState("");

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
    console.log(updatedBlogs);
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

 function handleSearchChange(e) {
    setSearch(e.target.value);
    const filteredBlogs = blogs.filter((blog) =>{
      return blog.author.name.toLowerCase().includes(search.toLowerCase());
   
   })
   setBlogs(filteredBlogs);
  }
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login setAuthor={setAuthor} />} />
          <Route
            path="/Form"
            element={<Form onUpdate={handlePost} author={author} />}
          />
          <Route
            path="/"
            element={
              <Blogs
                blogs={blogs}
                onDelete={handleDelete}
                onBlogUpdate={handleUpdate}
                onBlogLike={handleLike}
                search={search} 
                onSearchChange={setSearch}
                clickSearch={handleSearchChange}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
