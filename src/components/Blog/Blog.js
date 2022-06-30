import React, { useState } from "react";
import Body from "../BlogBody/Body";
import EditForm from "../EditForm/EditForm";
import "./Blog.css";

function Blog({ blog, onDelete, onBlogUpdate, onBlogLike }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteClick() {
    console.log({ id: blog.id });
    fetch(`https://codeyblogs.herokuapp.com/posts/${blog.id}`, {
      method: "DELETE",
    });
    onDelete(blog.id);
  }

  function handleLikeClick() {
    console.log({ id: blog.id });
    fetch(`https://codeyblogs.herokuapp.com/likes/${blog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: blog.likes + 1,
      }),
    });
    onBlogLike(blog.id);
  }

  
  return (
    <div>
      
      <div className="card-horizontal">
        <div className="card-content">
          <h3 className="black-text text-lighten-1">{blog.title}</h3>
          {!isEditing ? (
            <div className="blog-posts">
              <Body blog={blog} />
            </div>
          ) : (
            <EditForm
              blog={blog}
              onBlogUpdate={onBlogUpdate}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          )}
        </div>
        <div className="card-action">
          <i
            className="icon small material-icons teal-text"
            onClick={handleDeleteClick}
          >
            delete
          </i>
          <i
            className="icon small material-icons teal-text lighten-2"
            onClick={() => setIsEditing((isEditing) => !isEditing)}
          >
            create
          </i>
          <div className="likes">
          <i
            className="icon small material-icons teal-text"
            onClick={handleLikeClick}
          >
            thumb_up
          </i>
          <p className="icon">{blog.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
