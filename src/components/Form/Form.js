import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form({ onUpdate, author }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleBodyChange(e) {
    setBody(e.target.value);
  }
  // console.log(name, body);

  function handleSubmitClick(e) {
    e.preventDefault();

    fetch("https://codeyblogs.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        name: author.name,
        email: author.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        onUpdate(data);
        window.location.reload();
        navigate('/');
      });
      
  }

  return (
    <div>
      <Navbar />
      <div className="form1">
        <div>
          <form className="create-form" onSubmit={handleSubmitClick}>
            <h1>create a new blog post</h1>
            <input
              type="text"
              placeholder="Blog Title..."
              onChange={handleTitleChange}
              value={title}
            />
            <textarea
              placeholder="write your blog here..."
              onChange={handleBodyChange}
              value={body}
            />
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Publish
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
