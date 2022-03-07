import "./Button.css";

export function Button ({children, className, ...rest}) {
  return <button className={`btn${className ? ' ' + className : ''}`} {...rest}>{children}</button>
}