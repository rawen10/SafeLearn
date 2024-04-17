import React from "react";
import pic from "./1.jpg";
// import Sidenav from '../Components/Sidenav';

// import "./Home.css"
const Home = () => {

  return (
    <div id="Home" style={{marginLeft:300 , flexDirection:"column"}}>
      <div className="Home text">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap')
          @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&family=Quicksand:wght@300..700&display=swap')
        </style>
        <h1 style={{paddingTop:80,  color: "#ACEAF7",fontFamily: "Quicksand, sans-serif" }}>
          Welcome to SafeLearn <br></br>
          Empowering Privacy-Preserving AI with Federated Learning Models
        </h1>
      </div>

      <div
      
        style={{ display: "flex", justifyContent: "center", marginTop: "10px",  fontFamily: "Nanum Myeongjo, serif",
  fontWeight: 400,flexWrap:"wrap",
  fontStyle: "normal", color:"white" }}
      >
        <h4
          className="col-6"
          style={{
            marginTop: "110px",
            display: "flex",
            textAlign: "start",
            marginLeft: "20px",
            fontWeight: "normal",
            
          }}
        >
          Unlock the power of federated object classification without
          compromising confidentiality. Our platform allows you to train robust
          object classifiers collaboratively, without sharing sensitive data or
          centralizing databases. Join us in revolutionizing privacy-preserving
          AI using federated learning models! <br></br>
          Our vision? To make AI accessible, secure, and privacy-conscious.
        </h4>

        <div
          className="image-container"
          style={{ marginTop: "40px", marginLeft: "40px" }}
        >
          <img
            style={{ width: "460px", borderRadius: "30px" }}
            src={pic}
            alt="home"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
