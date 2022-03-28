import React, { FC } from "react";
import classes from "./Input.module.css";

export interface InputProps {
  children?: string;
  label?: string;
  icon?: string;
  placeholder?: string;
  errorText?: string;
  size?: "xl" | "l" | "m" | "s";
  type?: "text" | "password" | "email";
}
const Input: React.FC<InputProps> = ({
  size = "l",
  label,
  placeholder = "placeholder",
  icon,
  errorText,
  children,
  type = "text",
}) => {
  return (
    <>
      {
        label ? (
          <label>
            <p>{label}</p>
            <input
              type={type}
              className={[classes.input, classes[size]].join(" ")}
              placeholder={placeholder}
            />
          </label>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className={[classes.input, classes[size]].join(" ")}
            
          />
        )
        // {children}
      }
    </>
  );
};

export default Input;
