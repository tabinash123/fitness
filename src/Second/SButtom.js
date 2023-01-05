import React from 'react'

const SButtom = () => {
    const data = [
      {
        img: require("../assets/smallwalk.png"),
        value: 3680,
        unit: "Steps",
      },
      {
        img: require("../assets/smallheart.png"),
        value: 98,
        unit: "bpm",
      },
      {
        img: require("../assets/smallfire.png"),
        value: 98,
        unit: "Callories",
      },
    ];
    const icon = [
      require("../assets/home.png"),
      require("../assets/person.png"),
      require("../assets/clock.png"),
      require("../assets/bell.png"),
      require("../assets/setting.png"),
    ];
  return (
    <div>
      <div className="sb-first">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "49%",
            paddingLeft: "20px",
            marginTop: "10px",
            gap: 5,
            color: "white",
          }}
        >
          {data.map((itm,index) => (
            <div
              key={index}
              style={{
                width: "99%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "55px",
                alignItems: "center",
                borderBottomWidth: "1px",
                borderBottomColor: "rgba(163, 180, 189, 0.7)",
                borderBottomStyle: "solid",
              }}
            >
              {" "}
              <div>
                <img src={itm.img} alt="fire" />
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                {itm.value}{" "}
                <div style={{ fontSize: 12, fontWeight: 400 }}>{itm.unit}</div>{" "}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "170px",
            height: "200px",
            position: "absolute",
            marginLeft: 152,
            marginTop: 11,
          }}
        >
          <img
            src={require("../assets/TRACKING LINE 1.png")}
            alt="track"
            style={{ height: "240px", position: "absolute" }}
          />
        </div>
      </div>
      <div
        style={{
          width: "90%",
          marginTop:50,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft:9
        }}
      >
        {icon.map((itm,index ) => (
          <div key={index} >
            <img className='shadow2' src={itm} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SButtom