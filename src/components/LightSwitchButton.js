import React, {useState} from "react";

function LightSwitchButton (props) {
  const {light, handleClick} = props;
  return (
    <button className = "LightSwitchButton" onClick = {handleClick}>
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className = "off"><i>💡</i> I'm off!</span>}
    </button>
  );
} 

export default LightSwitchButton;