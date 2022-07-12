import React from "react";
import background from "../assets/images/bg11.jpg";
export const Background = (props) => {
  const styles = {
    backgroundImage: `url("${background}")`,
  };
  return (
    <div style={styles} className="wrapper_image">
      <div className={props.className} onClick={props.onClick}>
        {props.children}
      </div>
    </div>
  );
};
