import React from "react";
import "./style.css";

function Button(props) {
  let classes = "button ";
  classes += props.operation ? "operation" : "";
  classes += props.double ? "double" : "";
  classes += props.triple ? "triple" : "";

  let value = props.value ? props.value : props.label;

  return (
    <button
      onClick={e => props.click && props.click(value)}
      className={classes}
    >
      {props.label}
    </button>
  );
}

export default Button;
