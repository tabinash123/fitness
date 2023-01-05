import React from 'react'
import LoginChart from './login/LoginChart';
import { Link } from 'react-router-dom';

const LoginOrSignup = () => {
    return (
      <div
        className="main"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="top">
          <Link to="/">
            <img src={require("./assets/less.png")} alt="back"className='shadow' />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
            marginTop: "50px",
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
              marginTop: 20,
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
              marginTop: 20,
            }}
          >
            <img
              src={require("./assets/walking.png")}
              alt="menu"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <LoginChart />
        <div
          className="back"
          style={{
            marginLeft: "60px",
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

export default LoginOrSignup