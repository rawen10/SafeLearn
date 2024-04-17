import React from "react";
import logo from "../logo.png"

function Profile() {
  return (
    <div className="text-white">
      ya raaaaaaaaaaaawen
      <img
        style={{width:300, marginLeft:150, marginTop:100, borderRadius: "30px" }}
        src={logo}
        alt="home"
      />
    </div>
  );
}

export default Profile;
