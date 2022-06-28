import React, {useEffect, useState} from "react";
import Sidebar from "../Sidebar";
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



  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m-2 l2 teal lighten-2">
          <Sidebar />
        </div>
        <div className="col s12 m-7 l7">
          <Blogs blogs={blogs} onDelete={handleDelete} onBlogUpdate={handleUpdate} />
        </div>
        <div className="col s12 m-3 l3">
          <Form onUpdate={handlePost} />
        </div>
      </div>
    </div>
  );
}

export default Home;
