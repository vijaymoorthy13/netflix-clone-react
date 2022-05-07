import React, { useState } from 'react'
import '../screens/LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [isRegister, setIsRegister] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img 
            className='loginScreen__logo'
            src='https://pngimg.com/uploads/netflix/netflix_PNG25.png' 
            alt=''
            />            
            <button            
            onClick={()=> setIsRegister(true)}
             className='loginScreen__button'>
                 Sign In
            </button>            
            <div className='loginScreen__gradient'></div>
            
        </div>
        <div className='loginScreen__body'>
            {isRegister ? (
                <SignUpScreen/>
                ):(<>
                    <h1>Unlimited films,Tv Programmes and More.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or purchase your membership</h3>
                    <div className='loginScreen__input'>
                        <form>
                            <input type="email" placeholder='Email Address'/>
                            <button 
                            onClick={()=> setIsRegister(true)}
                            className='loginScreen__getStarted'>GET STARTED</button>
                        </form>
                    </div>
                    </>)}
            </div>
    </div>
  )
}

export default LoginScreen
