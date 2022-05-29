import React from "react";
import "./index.css";

function App(props) {
  return (
    <>
      <div className="card" style={{ backgroundColor: "black" }}>
        <div className="image">
          <img
            src={props.imgsrc}
            alt=""
            style={{ width: "300px", height: "200px", borderRadius: "10px" }}
          />
        </div>
        <div className="category">
          A Netflix Originals
          <div className="name">{props.name}</div>
          <div className="button">
            <button className="btn">
              <a href={props.link} target="_blank">
                Watch Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
