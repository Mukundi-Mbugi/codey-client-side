import React from "react";

function Blog({ blog }) {
  // const [id, title, body, name] = [blog.author.id, blog.title, blog.body, blog.author.name, ]

  function handleDeleteClick() {
    console.log({ id: blog.id });
    fetch(`https://codeyblogs.herokuapp.com/posts/${blog.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <div className="card horizontal">
        <div className="card-content">
          <h6 className="black-text text-lighten-1">I{blog.title}</h6>
          <p className="black-text text-lighten-1">{blog.body}</p>
        </div>
        <div className="card-action">
          <h6>{`by: ${blog.title}`}</h6>
          <i
            className="small material-icons teal-text"
            onClick={handleDeleteClick}
          >
            delete
          </i>
          <i className="small material-icons teal-text lighten-2">create</i>
        </div>
      </div>
    </div>
  );
}

export default Blog;
