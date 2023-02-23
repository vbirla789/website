import React from "react";
import "./First.css";
function first({ check, col, head, topic, para, button, src }) {
  return (
    <>
      <div className={check ? "first-main" : "sec-main"}>
        <div className="first-head">
          <div className={col ? "first-top" : "sec-top"}>
            <h3>{head}</h3>
            <h1>{topic}</h1>
            <p>{para}</p>
          </div>
          <div>
            <button className="first-button">{button}</button>
          </div>
        </div>
        <div className="img-div">
          <img src={src} alt="" className="first-img" />
        </div>
      </div>
    </>
  );
}

export default first;
