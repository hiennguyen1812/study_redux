import React from "react";
import "./Hello.css";
import hand_icon from "../../access/hand_icon.png";
import arrow_icon from "../../access/arrow.png";
import hero_img from "../../access/hero_image.png";

function Hello() {
  return (
    <div className="hello">
      <div className="hello_left">
        <h2>New Arrivals Only</h2>
        <div className="hello_hand_icon">
          <p>New</p>
          <img src={hand_icon} />
        </div>
        <p>Collections</p>
        <p>for everyone</p>
        <div className="hello_last_btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} />
        </div>
      </div>
      <div className="hello_right">
        <img src={hero_img} />
      </div>
    </div>
  );
}

export default Hello;
