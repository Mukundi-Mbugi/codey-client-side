import React from "react";
import Sidebar from "./Sidebar";
import Form from "./Form";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m-2 l2 teal lighten-2">
          <Sidebar />
        </div>
        {/* Card starts here */}
        <div className="col s12 m-7 l7">
          <div className="blue-text text-darken-1">
            <div class="col s12 m-7 l7">
              <div class="card horizontal">
                <div class="card-stacked">
                  <div class="card-content">
                    <p className="black-text text-lighten-1">
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div class="card-action">
                    <a href="#" className="red-text  center-align">
                      Read more
                    </a>
                    <i class="small material-icons teal-text">delete</i>
                    <i class="small material-icons teal-text lighten-2">
                      create
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card ends here */}
        <div className="col s12 m-7 l7">
          <div className="black-text text-darken-1">
            <div class="col s12 m7 l7">
              <div class="card horizontal">
                <div class="card-stacked">
                  <div class="card-content">
                    <p className="black-text text-lighten-1">
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </p>
                  </div>
                  <div class="card-action">
                    <a href="#" className="red-text">
                      Read more
                    </a>
                    <i class="small material-icons teal-text">delete</i>
                    <i class="small material-icons teal-text lighten-2">
                      create
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m-3 l3">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;
