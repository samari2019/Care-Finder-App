import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
function LogIn() {
  return (
    <>
      <div className="Login-Container">

        <div className="Login-Account">

          <div className="Login-Con1">

            <h2 className="Wel-Login-h2">Welcome Back</h2>

            <p className="Wel-Login-p1">Login using correct details!</p>

            <form className="form-container2">
              <label className="Login-label-2">Email Address</label>
              <input className="Wel-Login-email" type="email" name="" placeholder="Enter Email Address " />
              <label className="Login-label-3">Password</label>
              <input className="Wel-PassWord-C" type="email" name="" placeholder="Enter Password " />
              <button type="submit" className="Wel-button-D">Login</button>
            </form>

            <p className="Wel-OR">OR</p>
            <p className="Wel-Login-using">Login using</p>

            <div className="Wel-icons">
              <FcGoogle className="FcGoogle" />
              <IoLogoApple className="IoLogoApple" />
              <FaFacebook className="FaFacebook" />
            </div>
            <p className="wel-Already-have-an-account">Don't have an account?<a href="SignUp" className="AHAA-LOGIN">Signup!</a></p>
          </div>
        </div>

        <div className="Join-Our-Comm2">
          <h3 className="Join-Our-Comm-H3">CareFinder</h3>
          <p className="Join-Our-Comm-p1"> Join Our Community</p>
          <p className="Join-Our-Comm-p2">Enjoy seamless access to medical services.</p>
          <img className="Join-Our-Comm-image" src="./images/img7.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default LogIn;
