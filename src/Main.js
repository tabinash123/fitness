import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import less from './assets/less.png'
import { FitnessContext } from './Context';

const Main = () => {

  return (
    <div className="main">
      <div className="top">
        <img src={less} alt="back" className='shadow'/>
        <img src={require("./assets/menu.png")} alt="menu" className='shadow'/>
      </div>
      <div className="fire">
        <img src={require("./assets/fire.png")} alt="fire"  />
      </div>
      <div className="title">
        <div
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: "54px",
          }}
        >
          Fire Fit
        </div>
        <div style={{ fontSize: "16px", fontWeight: "normal" }}>
          Stay in shape, stay healthy
        </div>
      </div>
      <Link to="/Signup">
        <button className="button">Sign Up</button>
      </Link>
      <Link to="/Login">
        <button
          className="button"
          style={{
            marginTop: "14px",
            background: "white",
            borderWidth: "2px",
          }}
        >
          Login
        </button>
      </Link>
      <div
        className="back"
        style={{
          marginLeft: "100px",
          marginTop: "13px",
          fontWeight: "normal",
          fontSize: 18,
          color: "white",
        }}
      >
        Forget your password ?
      </div>
    </div>
  );
}

export default Main