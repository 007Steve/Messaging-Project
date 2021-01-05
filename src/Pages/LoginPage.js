import React from "react";
import "../styles/LoginPage.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function LoginPage() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => <h2>{error.message}</h2>);
  };

  const demo = () => {
    dispatch(login({}));
  };
  return (
    <div className="loginPage">
      <div className="loginPage__logo">
        <img src="/Untitled design (7).png" alt="logo"/>
      </div>
      <Button className="btn-grad" onClick={signIn}>
        SIGN IN
      </Button>
      <Button className="btn-grad" onClick={demo}>
        Demo
      </Button>
    </div>
  );
}

export default LoginPage;
