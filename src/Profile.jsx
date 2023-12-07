import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

function Profile() {
  return (
    <>
      <div className="Profile-container">
      <h1 className="profile-h1">CareFinder</h1>
      <a className="profile" href="#">Profile</a>
      <a className="profile-find-hosp" href="#">Find Hospital</a>
      <a className="profile-book-app" href="#">Book An Appointment</a>
      <a className="profile-Home" href="#">Home</a>
      <a className="profile-Search2" href="#">Search</a>
      <a className="profile-library" href="#">Library</a>
      <input className="profile-search" type="text" name="" placeholder="Search hospital" />
      <img className="profile-image" src="./images/IMG1.jpg" alt="" />
      <h2 className="profile-details">PROFILE DETAILS</h2>
      <form>
      <label className="profile-lb1">Name</label>
      <input className="profile-enter-name" type="text" name="" placeholder="Enter Name" />
      <label className="profile-lb2">Email Address</label>
      <input className="profile-enter-email" type="text" name="" placeholder="Enter Email Address" />
      <label className="profile-lb3"> Address</label>
      <input className="profile-enter-address" type="text" name="" placeholder="Enter Address" />
      <button type="submit" className="button-save">Save</button>
      </form>
      <p className="profile-p1">Connect to Social Media Accounts</p>
      <FaFacebook className="profile-FaFacebook" />
      <FiInstagram className="profile-FiInstagram" />

      </div>
    </>
  )
}

export default Profile
