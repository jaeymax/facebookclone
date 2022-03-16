import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core';
import fblogo from './images/fb-logo.png';
import fbtext from './images/fb-text.png'

function Login() {

    const signIn = () =>{

    }

  return <div className='login' >
        <div className='login__logo' >
            <img src = {fblogo} />
            <img src= {fbtext} style={{width:'200px'}}  />
        </div>
        <Button type='submit' onClick = {signIn} >Sign In</Button>
  </div>;
}

export default Login;
