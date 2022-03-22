import "./Button.css";
import React from "react";

interface IProps {
  children?: React.ReactChildren|React.ReactText;
  className?: React.HTMLAttributes<HTMLButtonElement>;
  onClick: ()=>void;
  disabled?: boolean;
  rest?: React.HTMLAttributes<HTMLButtonElement>;
}

export const Button:React.FC<IProps> = ({children, className, ...rest}):JSX.Element => {
  return <button className={`btn${className ? ' ' + className : ''}`} {...rest}>{children}</button>
}