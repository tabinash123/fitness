import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FitnessContext } from './../Context';



const SignupChart = () => {
  const navigate = useNavigate();

  const initiaData = { name: "", surname: "", email: "", password: "" };

  const { detail, primaryAdd,secondaryAdd } = useContext(FitnessContext);
  const [dummyData, setdummyData] = useState(initiaData)
  const { name, surname, email, password } = dummyData;
  const [showText, setShowText] = useState(false);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || surname === "" || email === "" || password === "") 
    {
       setTimeout(() => {
         setShowText1(true);
         setTimeout(() => {
           setShowText1(false);
         }, 1000);
       }, 100);
    }
    else {
      if (email.includes('@') && email.includes('.com')) {
        secondaryAdd(name, surname, email, password);
        
      setTimeout(() => {
        setdummyData(initiaData);
      }, 500);

      setTimeout(() => {
        setShowText(true);
        setTimeout(() => {
          setShowText(false);
          setTimeout(() => {
            navigate('/Login');
          }, 500);
        }, 2000);
      }, 200);
      } else { 
        setShowText2(true)
        setTimeout(() => {
          setShowText2(false)
        }, 2000);
      }
      
      }
  }

 
  
  
  return (
    <div> <div style={{ position: 'absolute',color:'red' ,fontSize:35,fontWeight:700,marginLeft:5,width:350 }} >
      { showText1? 'Warnings: Enter all the fields !' :null }
      { showText? 'Congratulation your account is created . Now Log In' :null }
      { showText2? 'Write the correct format of email' :null }
    </div>
      <div className="signupChart">
        <div className="logintitle">Sign Up <br/> </div>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: "bold" }}>Name:</div>
            <div>
              <input
                placeholder="Name"
                style={{
                  width: "90%",
                  height: 40,
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                  borderColor: "wheat",
                }}
                value={dummyData.name}
                onChange={(e) =>
                  setdummyData({ ...dummyData, name: e.target.value })
                }
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
            <div style={{ fontSize: 15, fontWeight: "bold" }}>Surname:</div>
            <div>
              <input
                placeholder="Surname"
                style={{
                  width: "90%",
                  height: 40,
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: "bold",
                  borderColor: "wheat",
                }}
                value={dummyData.surname}
                onChange={(e) =>
                  setdummyData({ ...dummyData, surname: e.target.value })
                }
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
            <div style={{ fontSize: 15, fontWeight: "bold" }}>Email:</div>
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
                value={dummyData.email}
                onChange={(e) =>
                  setdummyData({ ...dummyData, email: e.target.value })
                }
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
                value={dummyData.password}
                onChange={(e) =>
                  setdummyData({ ...dummyData, password: e.target.value })
                }
              />
            </div>
          </div>
        </form>
        
          <button
            className="button"
            style={{ marginTop: 20, marginLeft: 60 }}
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </button>
        <br />
        Or
        <Link to="/Login">
          <button className="button" style={{ marginTop: 0, marginLeft: 60 }}>
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignupChart;
