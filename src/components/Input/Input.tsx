import React, { FC } from "react";
import classes from "./Input.module.css";

export interface InputProps {
  label?: string;
  icon?: string;
  placeholder?: string;
  errorText?: string;
  size?: "xl" | "l" | "m" | "s";
  type?: "text" | "password" | "email";
  className?: string;  
}
const Input: React.FC<InputProps> = ({
  size = "l",
  label,
  placeholder = "placeholder",
  icon,
  errorText,
  type = "text",
  className,
}) => {
  return (
    <>
      {
        label ? (
          <label>
            <p>{label}</p>
            <input
              type={type}
              className={[classes.input, classes[size], className].join(" ")}
              placeholder={placeholder}
            />
          </label>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className={[classes.input, classes[size], className].join(" ")}
            
          />
        )
        // {children}
      }
    </>
  );
};

export default Input;
