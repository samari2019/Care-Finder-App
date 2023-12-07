import React from 'react';
import { ImCheckmark2 } from "react-icons/im";

function PopUp() {
  return (
    <>
      <div className="popup-container">
      <h1 className="popup-h1">Appointment Booked Successfully</h1>
      <ImCheckmark2 className="ImCheckmark2"/>
      <p className="popup-p">Kindly check your email for details.</p>
      </div>
    </>
  );
}

export default PopUp;
