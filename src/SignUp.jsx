import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
function SignUp() {
  return (
    <>
      <div className="SignUp-Container">
        <div className="Create-An-Account">
          <h2 className="CAACC-h2">Create An Account</h2>
          <form>
            <label className="label-1">Name</label>
            <input className="enter-name-A" type="text" name="" placeholder="Enter Name" />
            <label className="label-2">Email Address</label>
            <input className="enter-email-B" type="email" name="" placeholder="Enter Email Address " />
            <label className="label-3">Password</label>
            <input className="PassWord-C" type="email" name="" placeholder="Enter Password " />
            <button type="submit" className="button-D">Create Account</button>
          </form>
          <p className="OR">OR</p>
          <div className="icons">
            <FcGoogle className="FcGoogle" />
            <IoLogoApple className="IoLogoApple" />
            <FaFacebook className="FaFacebook" />
          </div>
          <p className="Already-have-an-account">Already have an account?<a href="Login" className="AHAA-LOGIN">Login!</a></p>
        </div>
        <div className="Join-Our-Comm">
          <h3 className="Join-Our-Comm-H3">CareFinder</h3>
          <p className="Join-Our-Comm-p1"> Join Our Community</p>
          <p className="Join-Our-Comm-p2">Enjoy seamless access to medical services.</p>
          <img className="Join-Our-Comm-image" src="./images/img7.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
export default SignUp
