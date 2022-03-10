import "./Button.css";
import React from "react";

export function Button ({children, className, ...rest}) {
  return <button className={`btn${className ? ' ' + className : ''}`} {...rest}>{children}</button>
}