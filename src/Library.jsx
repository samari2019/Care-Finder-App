import React from 'react'
import { IoCall } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiShareBold } from "react-icons/pi";

function Library() {
  return (
    <>
      <div className="Library-container">
       <h1 className="Library-h1">CareFinder</h1>
       <h1 className="Library-h1-2">My Library</h1>
       <p className="Library-p1">Book Appointment to visit saved hospitals</p>
       <div className="Saved-container">
       <div className="saved-hosp-container">
       <img className="library-image1" src="./images/img11.jpg" alt="" />
       <h2 className="Saved-hosp-h2">Eve Foundation Hospital</h2>
       <p className="Saved-hosp-add">32 Admiralty way, lekki phase 1 Lagos</p>
       </div>
       <div className="side-container">
       < PiShareBold className="save-share"/>
       <IoCall className="save-Call" />
       <RiDeleteBin5Line  className="save-Delete" />
      
       </div>
       </div>
      </div>
    </>
  )
}

export default Library
