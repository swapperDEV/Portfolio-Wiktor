import React from "react";

export const Wrapper = (props) => {
  return (
    <div
      className={props.className}
      onKeyPress={props.onKeyPress}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
