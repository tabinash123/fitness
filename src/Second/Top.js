import React from 'react'

const Top = () => {
    const date = [1, 2, 3, 4, 5, 6, 7];
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div>
        <div className="s-heading">Hello</div>
        <div
          style={{
            fontWeight: 700,
            color: "blue",
            fontSize: 22,
            lineHeight: "34px",
            fontStyle: "normal",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Abinash
        </div>
        <div style={{ marginTop: 2, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: 25 }}>
            {day.map((itm, index) => (
              <div key={index}
                style={{
                  color: "#8C93AF",
                  fontSize: 15,
                  width: 27,
                  height: 52,
                  backgroundColor: "white",
                }}
              >
                <p className='shadow1' >{itm}</p>
                
                <div 
                  style={{
                    marginTop: 2,
                    fontWeight: 800,
                    fontSize: 25,
                    color: "black",
                  }}
                >
                  {" "}
                  {date[index]}{" "}
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Top