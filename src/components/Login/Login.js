import React, { useState } from "react";
import "./Login.css";
import { auth } from "../../components/Fireconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setAuthor }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setAuthor({name:name, email:email});
      navigate('/Form');
    } catch (error) {
      setError(
        error.code === "auth/email-already-in-use"
          ? "Email already in use"
          : error.message
      );
      
    }

    
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setAuthor({name:name, email:email});
      navigate('/Form');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <h1>Create  account</h1>
      <form className="login-form">
        <label>
          Username:
          <i className="material-icons left">person</i>
        </label>
        <input
          type="text"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>
          Email:
          <i className="material-icons left">email</i>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          Password:
          <i className="material-icons left">password</i>
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="class-btn">
          <div className="error_div">
            <p className="error">{error}</p>
          </div>
          {hasAccount ? (
            <div className="sign-text">
              <button onClick={handleLogin}>Sign in</button>
              <p id="sign">
                Don't have an account ?{" "}
                <span
                  onClick={() => setHasAccount(!hasAccount)}
                  className="sign-link"
                >
                  Sign Up
                </span>
              </p>
            </div>
          ) : (
            <div className="sign-text">
              <button onClick={handleSignup}>Sign up</button>
              <p>
                Have an account ?{" "}
                <span
                  onClick={() => setHasAccount(!hasAccount)}
                  className="sign-link"
                >
                  Sign in
                </span>
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
