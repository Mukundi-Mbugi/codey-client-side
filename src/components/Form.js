import React from 'react'
import '../App.css'

function Form() {
  return (
    <div>
        <div className="form1">
            <div>
              <form >
                <input type="text" placeholder="Title" />
                <input type="textarea" placeholder="blog post" />
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
  )
}

export default Form