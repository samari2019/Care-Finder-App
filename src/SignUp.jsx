import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { userSchema } from './joi/userSchema';
function SignUp() {
  const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [error, setError] = useState("")
  const { name, email, password, confirmPassword, } = user
  const handleSetUser = (e) => {
    setError("")
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSaveUserDetails = async (e) => {
    e.preventDefault()
    try {
      const { value, error } = userSchema.validate(user)
      if (error) {
        setError(error.message)
        return;
      } else {
        console.log(value)
      }
    }
    catch (e) {
      console.error(e.message)
    }

  }
  return (
    <>
      <div className="SignUp-Container">

        <div className="Create-An-Account">

          <div className="Create-An-Acct-Con1">

            <h2 className="CAACC-h2">Create An Account</h2>

            <form className="form-container">
              <label className="label-1">Name</label>
              <input className="enter-name-A" type="text" name="name" value={name} onChange={handleSetUser} placeholder="Enter Name" />
              <label className="label-2">Email Address</label>
              <input className="enter-email-B" type="email" name="email" value={email} onChange={handleSetUser} placeholder="Enter Email Address " />
              <label className="label-3">Password</label>
              <input className="PassWord-C" type="password" name="password" value={password} onChange={handleSetUser} placeholder="Enter Password " />
              <label className="label-4">Confirm Password</label>
              <input className="PassWord-D" type="password" name="confirmPassword" value={confirmPassword} onChange={handleSetUser} placeholder="Enter passsword again" />
              <p style={{ color: "red", fontSize: "10px", }} className="error">{error ? error : null}</p>
              <button onClick={handleSaveUserDetails} type="submit" className="button-D">Create Account</button>
            </form>

            <p className="OR">OR</p>

            <div className="icons">
              <FcGoogle className="FcGoogle" />
              <IoLogoApple className="IoLogoApple" />
              <FaFacebook className="FaFacebook" />
            </div>

            <p className="Already-have-an-account">Already have an account?<a href="Login" className="AHAA-LOGIN">Login!</a></p>
          </div>
        </div>
        <div className="Join-Our-Comm">
          <div className="Join-comm-con1">
            <h3 className="Join-Our-Comm-H3">CareFinder</h3>
            <p className="Join-Our-Comm-p1"> Join Our Community</p>
            <p className="Join-Our-Comm-p2">Enjoy seamless access to medical services.</p>
            <img className="Join-Our-Comm-image" src="./images/img7.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUp
