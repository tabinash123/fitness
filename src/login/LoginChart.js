import React, { useContext, useEffect, useState } from 'react'
import { FitnessContext } from './../Context';
import { Link, useNavigate } from "react-router-dom";


const initialData = { email: '', password: '' }

const LoginChart = () => {
  const {detail,getItem,login}=useContext(FitnessContext)
  const [data, setdata] = useState(initialData)
  const { email, password } = data;
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === ''|| password === '') {
       setTimeout(() => {
         setShowText1(true);
         setTimeout(() => {
           setShowText1(false);
         }, 1000);
       }, 200);
    } else {
      if (email.includes('@') && email.includes('.com')) {
        {
          detail.map((itm) => {
                if (itm.Email === email) {
                  if (itm.Password === password) {
                    setTimeout(() => {
                      setShowText4(true);

                      setTimeout(() => {
                        setShowText4(false);
                        navigate("/Second");
                      }, 500);
                    }, 200);
                  } else {
                    setTimeout(() => {
                      setShowText3(true);
                      setTimeout(() => {
                        setShowText3(false);
                      }, 600);
                      console.log("password not matched");
                    }, 300);
                  }
                } else {
                  
                }
            })
        }
        
      }
      else {
       setTimeout(() => {
         setShowText2(true);
         setTimeout(() => {
           setShowText2(false);
         }, 600);
       }, 200);
      }
      
  }
  }

  
  
  return (
    <div>
      {" "}
      <div
        style={{
          position: "absolute",
          color: "red",
          fontSize: 35,
          fontWeight: 700,
          marginLeft: 5,
          width: 350,
        }}
      >
        {showText1 ? "Warnings: Enter all the fields !" : null}
        {showText2 ? "Warnings: Enter correct email !" : null}
        {showText3 ? "Warnings: Enter correct password !" : null}
        {showText4 ? 'Login successful' : null}
       
      </div>
      <div className="loginChart">
        <div className="logintitle">Log In</div>
        <div
          style={{
            marginTop: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: "bold" }}>Email:</div>
          <div>
            <input
              placeholder="Email"
              style={{
                width: "90%",
                height: 40,
                borderRadius: 10,
                fontSize: 15,
                fontWeight: "bold",
                borderColor: "wheat",
              }}
              value={email}
              onChange={(e) => setdata({ ...data, email: e.target.value })}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <div style={{ fontSize: 15, fontWeight: "bold" }}>Password:</div>
          <div>
            <input
              placeholder="Password"
              style={{
                width: "90%",
                height: 40,
                borderRadius: 10,
                fontSize: 15,
                fontWeight: "bold",
                borderColor: "wheat",
              }}
              value={password}
              onChange={(e) => setdata({ ...data, password: e.target.value })}
            />
          </div>
        </div>
        <button
          className="button"
          style={{ marginTop: 40, marginLeft: 60 }}
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginChart