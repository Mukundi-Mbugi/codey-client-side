import React, { useState } from "react";
import EditForm from "../EditForm/EditForm";
import './Blog.css'

function Blog({ blog, onDelete, onBlogUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  
  function handleDeleteClick() {
    console.log({ id: blog.id });
    fetch(`https://codeyblogs.herokuapp.com/posts/${blog.id}`, {
      method: "DELETE",
    })
      onDelete(blog.id);
  }

  return (
    <div>
      <div className="card-horizontal">
        <div className="card-content">
          <h3 className="black-text text-lighten-1">{blog.title}</h3>
          {!isEditing ? (<p className="black-text text-lighten-1">{blog.body}</p> ): 
          <EditForm blog={blog} onBlogUpdate={onBlogUpdate} isEditing={isEditing} setIsEditing={setIsEditing} />}
        </div>
        <div className="card-action">
                  
          <i
            className="small material-icons teal-text"
            onClick={handleDeleteClick}
          >
            delete
          </i>
          <i className="small material-icons teal-text lighten-2" onClick={() => setIsEditing((isEditing) => !isEditing)}>create</i>
        </div>
      </div>
    </div>
  );
}

export default Blog;
