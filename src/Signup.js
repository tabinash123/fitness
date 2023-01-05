import React from "react";
import LoginChart from "./login/LoginChart";
import SignupChart from './Signup/SignupChart';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={"top"}>
        <div className="shadow">
          <Link to="/">
            <img
              src={require("./assets/less.png")}
              alt="back"
              className="shadow"
            />
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          marginTop: "25px",
          fontFamily: "initial",
          fontWeight: "bold",
          color: "yellow",
        }}
      >
        Fitness
      </div>
      <div>
        <div
          style={{
            position: "absolute",
            width: 100,
            height: 100,
            marginLeft: 100,
            marginTop: 10,
          }}
        >
          <img
            src={require("./assets/w-back.png")}
            alt="menu"
            className="img"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            width: 100,
            height: 100,
            marginLeft: 100,
            marginTop: 10,
          }}
        >
          <img
            src={require("./assets/walking.png")}
            alt="menu"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <SignupChart />
    </div>
  );
};

export default Signup;
