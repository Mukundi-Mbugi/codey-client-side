import React, { useState } from "react";
import "./Form.css";

function Form({onUpdate}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleBodyChange(e) {
    setBody(e.target.value);
  }
  // console.log(name, body);

  function handleSubmitClick(e) {
    e.preventDefault();

    fetch('https://codeyblogs.herokuapp.com/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
      })
    })
    .then(res=> res.json())
    .then(data => onUpdate(data))
    
    
  }

  return (
    <div>
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
