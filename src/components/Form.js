import React, {useState} from 'react'
import '../App.css'

function Form() {

  const [name, setName] = useState('')
  const [body, setBody] = useState('')

  function handleChange(e){
    
    setName(e.target.value); 
    setBody(e.target.value)
    
  }
  // console.log(name, body);

  function handleSubmitClick(e){
    e.preventDefault();
    console.log(e);
    
    console.log(name, body);
    fetch("https://codeyblogs.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: name,
        body: body
      })

    })
  }

  return (
    <div>
        <div className="form1">
            <div>
              <form onSubmit={handleSubmitClick}>
                <input type="text" placeholder="Title" onChange={handleChange} />
                <textarea placeholder="blog post" onChange={handleChange} />
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