import React, { FC } from "react";
import classes from "./Button.module.css";

const solidViolet = classes.solidViolet;
const outlineViolet = classes.outlineViolet;
const solidYellow = classes.solidYellow;
const solidRed = classes.solidRed;
const outlineRed = classes.outlineRed;

export interface ButtonProps {
  className?:
    | "solidViolet"
    | "outlineViolet"
    | "solidYellow"
    | "solidRed"
    | "outlineRed";
  children?: string;
  icon?: string;
  onClick?: () => void;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  className = "solidViolet",
  icon,
  children,
  onClick,
  ...props
}) => {
  const buttonWithIcon = ("" && !icon) || (classes.buttonWithIcon && icon);
  const classButton = classes[className];
  const classButton2 =
    (className === "solidViolet" && solidViolet) ||
    (className === "outlineViolet" && outlineViolet) ||
    (className === "solidYellow" && solidYellow) ||
    (className === "solidRed" && solidRed) ||
    (className === "outlineRed" && outlineRed);

  return (
    <button
      type="button"
      // работает на storybook
      className={[classButton2, classes.button, "button", buttonWithIcon].join(
        " "
      )}
      {...props}
    >
      {icon && <img src={icon} />}
      {console.log("classButton", classButton, "classButton2", classButton2)}
      <p>{children}</p>
    </button>
  );
};

export default Button;
