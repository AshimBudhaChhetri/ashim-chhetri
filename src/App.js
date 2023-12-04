import React from "react";
import Login from "./components/Login";
import Userportal from "./components/Userportal";
import Schedule from "./components/Schedule";
function App() {
  return (
    <div className="App">
      <div className="main-div">
        <Login />
        <Userportal />
        <Schedule />
      </div>
    </div>
  );
}

export default App;
