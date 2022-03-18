import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core';
import fblogo from './images/fb-logo.png';
import fbtext from './images/fb-text.png'
import {useGlobalContext} from './StateProvider';
import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth } from './firebase';
//import { actionTypes } from './reducer';

function Login() {
   
  
    const signIn = async () =>{
      const provider = new GoogleAuthProvider();
      try{
        const result = await signInWithPopup(auth, provider);
        console.log(result.user)
        
      }catch(error){
        console.log(error)
      }
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
