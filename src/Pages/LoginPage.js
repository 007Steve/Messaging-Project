import React from "react";
import "../styles/LoginPage.css";
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
function LoginPage() {
    const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => <h2>{error.message}</h2>)
    }

  
  return (
    <div className="loginPage">
          <div className="loginPage__logo">
                <img src="/Untitled design (7).png"/>
            </div>
            <Button className="btn-grad" onClick={signIn}>SIGN IN</Button>
    </div>
  );
}

export default LoginPage;