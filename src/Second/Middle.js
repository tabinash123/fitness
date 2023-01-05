import React from 'react'

const Middle = () => {
  return (
    <div className="s-middle">
      <div>
        <div style={{ position: "absolute",width:150 }}>
          <img className='depth' src={require("../assets/walking.png")} alt="menu" style={{width:'100%'}} />
        </div>
        <div style={{ position: "absolute",width:150 }}>
          <img src={require("../assets/walking.png")} alt="menu" style={{width:'100%'}} />
        </div>
        <div style={{ position: "",width:160 }}>
          <img src={require("../assets/w-back.png")} alt="menu" style={{width:'100%'}} />
        </div>
      </div>
      <div className="s-m-text">
        <div  style={{ fontSize: 16, fontWeight: 600 }}>Today you run </div>
        <div style={{ fontSize: 39, fontWeight: 600,color:'blue' }}>5.31 km </div>

        <button
          className="button"
          style={{
            marginTop: "14px",
            color:'white',
            borderWidth: "2px",
            marginLeft:'0px'
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default Middle