import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

import "../styles/login.scoped.scss";



import { Button, } from "@mui/material";

import axios from 'axios';





let BACKEND_SERVER_BASE_URL = import.meta.env.VITE_BACKEND_SERVER_BASE_URL || process.env.VITE_BACKEND_SERVER_BASE_URL;

const Login = () => {
  let { loginUser } = useContext(AuthContext);
  
  




  


  const addSignUpModeClass = () => {
    // Get the container element
    const container = document.querySelector(".container");

    // Add the 'sign-up-mode' class to the container
    if (container) {
      container.classList.add("sign-up-mode");
    }
  };

  const addSignInModeClass = () => {
    // Get the container element
    const container = document.querySelector(".container");

    // Add the 'sign-up-mode' class to the container
    if (container) {
      container.classList.remove("sign-up-mode");
    }
  };
  



    
  let registerUser = async (e) => {
    var username = e.target.username1.value
    var email = e.target.email1.value
    var password = e.target.password1.value
    var bio = ""
    var profile_image =  "https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-user-icon-symbol-design-user-icon-isolated-design-png-image_1746919.jpg"
    //console.log("hi: "+username)

    
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
    }
    

    e.preventDefault()
    
    let response = await axios.post(`${BACKEND_SERVER_BASE_URL}/api/v1/register`, {username, email, password, bio, profile_image} );
    
    if(response){
      alert("Registration success, login ")
    }else{
      alert("Registration failed")
    }
    
    console.log(e)
    //
    //let response = await fetch("http://127.0.0.1:5000/api/v1/register", {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //  body: JSON.stringify({
    //    username: e.target.username1.value,
    //    password: e.target.password1.value,
    //  }),
    //});

    console.log(response);
    
  }
  

  return (
    <>
    

    

      {/* <!-- form --> */}
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">


            <form action="#" className="sign-in-form" onSubmit={loginUser}>

              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  autoComplete="username"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  autoComplete="current-password"
                />
              </div>

              <Button sx={{color: "white"}} type="submit" className="btn solid pc"  variant="text" value="Login"  >Login</Button>
    

              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <form action="#" method="post" className="sign-up-form" onSubmit={registerUser}>
              <h2 className="title">Create Account</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="username1"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email1"
                  required
                  autocomplete="email"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password1"
                  required
                  autoComplete="new-password"
                />
              </div>

    


              <Button  sx={{color: "white"}} type="submit" className="btn pc"  variant="text" value="Sign up" >Sign up</Button>
   

    
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Welcome Friend !</h3>
              <p>
                If you are new and you would like to create an account to unlock
                more features, sign up.
              </p>
              <Button
                onClick={addSignUpModeClass}
                className="btn transparent"
                id="sign-up-btn"
              >
                Sign up
              </Button>
            </div>
            <img src="login/girl_login.png" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Welcome Back !</h3>
              <p>
                If you already have an account proceed to log in. <br />
                Eat your noodles bunny.{" "}
              </p>
    
    
              <Button onClick={addSignInModeClass} className="btn transparent" id="sign-in-btn" >

                Sign in
              </Button>
            </div>
            <img src="login/bunny_register.gif" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
