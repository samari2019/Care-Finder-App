import React, { useState } from "react";
import Home from "./Home";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import PopUp from "./PopUp";
import Profile from "./Profile";
import Library from "./Library";



 export const AppContext = React.createContext({})


function App() {
  const [NearByHospital, setNearByHospital] = useState("HI Hospital");
  return ( <AppContext.Provider value={{NearByHospital, setNearByHospital}}>
    <div className="container">
      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
      {/*<PopUp />*/}
      {/*<Profile />*/}
     {/* <Library /> */}
    </div>
    </AppContext.Provider> );
}

export default App;
