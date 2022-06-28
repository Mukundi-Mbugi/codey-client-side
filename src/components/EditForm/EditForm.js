import React, { useState } from "react";

function EditForm({ blog, onBlogUpdate, isEditing, setIsEditing }) {
  const [blogBody, setBlogBody] = useState(blog.body);
  const [blogTitle, setBlogTitle] = useState(blog.title);

  function handleUpdateForm(e) {
    e.preventDefault();
    fetch(`https://codeyblogs.herokuapp.com/posts/${blog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: blogTitle,
        body: blogBody,
      }),
    })
      .then((res) => res.json())
      .then((updatedBlog) => onBlogUpdate(updatedBlog));
    setIsEditing((isEditing) => !isEditing);
  }

  return (
    <div>
      <form onSubmit={handleUpdateForm}>
        <input
          type="text"
          onChange={(e) => setBlogTitle(e.target.value)}
          value={blogTitle}
        />
        <input
          type="text"
          onChange={(e) => setBlogBody(e.target.value)}
          value={blogBody}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

export default EditForm;
