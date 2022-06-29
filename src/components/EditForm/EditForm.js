import React, { useState } from "react";
import './EditForm.css'

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
      <form className="update-form" onSubmit={handleUpdateForm}>
        <textarea
          type="text"
          onChange={(e) => setBlogTitle(e.target.value)}
          value={blogTitle}
        />
        <textarea
          type="text"
          onChange={(e) => setBlogBody(e.target.value)}
          value={blogBody}
        />
        <button>update</button> 
      </form>
    </div>
  );
}

export default EditForm;
