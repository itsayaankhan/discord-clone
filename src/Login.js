import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

  return (
    <div className='login'>
        <div className="login__logo">
            <img src="https://www.resizepixel.com/Image/d8buqk4e83/Preview/Discord-logo-2402182468.png?v=e5f11622-463b-4f2d-8fab-fcbb082c47f8" alt="logo" />
        </div>

        <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}

export default Login