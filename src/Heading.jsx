import React from "react";

function Heading(props) {
  return (
    <>
      <div
        className="head"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <span>
          <img
            src={props.imgsource}
            alt=""
            style={{
              width: "132px",
              height: "70px",
              marginTop: "10px",
              marginRight: "20px",
            }}
          />
        </span>
        <h1
          style={{
            backgroundColor: "black",
            textAlign: "center",
            color: "red",
            fontSize: "70px",
            margin: "0px 198px",
          }}
        >
          10 Best Netflix Series
        </h1>
      </div>
    </>
  );
}

export default Heading;
