import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      // console.log(result);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="login">
      <p className="loginTitle">ログインしてはじめる</p>
      <button className="loginButton" onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
