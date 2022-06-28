import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <h4>Create an account</h4>
        <form className='login-form'>
            <label>Username:
            <i className="material-icons left">person</i>
            </label>
            <input type="text" name="username" 
            />
            <label>Email:
            <i className="material-icons left">email</i>
            </label>
            <input type="email" name="email" />
            <label>Password:
            <i className="material-icons left">password</i>
            </label>
            <input type="password" name="password" />
            <button type="submit" name="action">Continue</button>
        </form>
    </div>
  )
}

export default Login