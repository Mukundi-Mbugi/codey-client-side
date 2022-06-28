import React, { useState } from "react";

function EditPost({blog,onUpdateBlog}) {
  const [blogBody, setBlogBody] = useState(`${blog.body}`);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`https://codeyblogs.herokuapp.com/posts/${blog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: blog.body,
      }),
    })
      .then((r) => r.json())
      .then((updatedBlog) => onUpdateBlog(updatedBlog));
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={blogBody}
        onChange={(e) => setBlogBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditPost;
