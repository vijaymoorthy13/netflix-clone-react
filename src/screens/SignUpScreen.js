import React, { useState, } from 'react'
import { auth } from '../firebase';
import '../screens/SignUpScreen.css';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

function SignUpScreen() {
   
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    isRegister ? handleLogin() : handleRegister();
  };
  

  const handleLogin = () => {
    if (email && password !== "") {
        signInWithEmailAndPassword(auth,email, password)
        .then((data) => alert("Logged in successfully!!!"))
        .catch((err) => alert(err));
    }
  };
  const handleRegister = () => {
    if (email && password !== "") {
      createUserWithEmailAndPassword(auth,email, password)
        .then((data) => alert("Registered Successfully"))
        .catch((err) => alert(err));
    }
  };

  

  return (
    <div className='signupScreen'>      
  
        <form>
            <h1>{isRegister ? "Login" : "Register"}</h1>
            <h3 className='signupScreen__header'>{isRegister ? "Login" : "Register"}</h3>
            <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  required={true}
                  placeholder="Enter your email"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required={true}
                  placeholder="Enter your password"
                /> 
            <button className='register__button' type='submit' onClick={handleSubmit}>
            <h3>{isRegister ? "Login" : "Register"}</h3>
              </button>

            <h4>
                <span className='signupScreen__gray'>New to Netflix? </span>
                <span className='signupScreen__link' onClick={() => setIsRegister((show) => !show)}> 
                {isRegister ? "New member? " : "Already registered? "}
                </span>
                
            </h4>
        </form>

    </div>

    
  )
}


export default SignUpScreen
