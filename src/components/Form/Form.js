import React, { useState } from "react";
import "./Form.css";

function Form() {
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
    console.log(e);

    console.log(title, body);
    fetch("https://codeyblogs.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    });
  }

  return (
    <div>
      <div className="form1">
        <div>
          <form onSubmit={handleSubmitClick}>
            <input
              type="text"
              placeholder="Title"
              onChange={handleTitleChange}
              value={title}
            />
            <textarea
              placeholder="blog post"
              onChange={handleBodyChange}
              value={body}
            />
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
