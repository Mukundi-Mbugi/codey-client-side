import React from 'react'
import './Login.css'
import {auth} from '../../components/Fireconfig';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [hasAccount, setHasAccount] = React.useState(false);

    const handleSignup = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            setHasAccount(true);
        }catch(error){
            setError(error.message);
        }
    }
    const handleLogin = async () =>{
        try{
            await signInWithEmailAndPassword(auth, email, password);
            setHasAccount(true);
        }catch(error){
            setError(error.message);
        }
    };
    

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
            
            <div className="classbtn">
        {hasAccount ? (
          <>
            <button onClick={handleLogin}>Sign in</button>
            <p id="sign">
              Don't have an account ?{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <button onClick={handleSignup}>Sign up</button>
            <p>
              Have an account ?{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
            </p>
          </>
        )}
      </div>
        </form>
    </div>
  )
}

export default Login