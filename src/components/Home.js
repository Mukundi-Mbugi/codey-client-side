import React from "react";
import Sidebar from "./Sidebar";
import Form from "./Form";
import Blogs from "./Blogs";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m-2 l2 teal lighten-2">
          <Sidebar />
        </div>
        <div className="col s12 m-7 l7">
          <Blogs />
        </div>
        <div className="col s12 m-3 l3">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;
