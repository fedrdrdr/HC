import React, { FC } from "react";
import classes from "./Button.module.css";

const solidViolet = classes.solidViolet;
const outlineViolet = classes.outlineViolet;
const solidYellow = classes.solidYellow;
const solidRed = classes.solidRed;
const outlineRed = classes.outlineRed;



export interface ButtonProps {
  type?: "solid" | "outline" | "flat";
  color?: "violet" | "red" | "yellow";
  children?: string;
  icon?: string;
  onClick?: () => void;
  // onClick: React.MouseEventHandler<HTMLButtonElement>;
}



const Button: React.FC<ButtonProps> = ({
  type = "solid",
  color = "violet",
  icon,
  children,
  onClick,
  ...props
}) => {
  const buttonWithIcon = ("" && !icon) || (classes.buttonWithIcon && icon);
  // const classButton = classes[className];
  const classButton =
    (type === "solid" && color === "violet" && solidViolet) ||
    (type === "outline" && color === "violet" && outlineViolet) ||
    (type === "solid" && color === "red" && solidRed) ||
    (type === "outline" && color === "red" && outlineRed) ||
    (type === "solid" && color === "yellow" && solidYellow);

  return (
    <button
      type="button"
      // работает на storybook
      className={[classes.button, "button", classButton, buttonWithIcon].join(
        " "
      )}
      {...props}
    >
      {icon && <img src={icon} />}
      {console.log("classButton", classButton)}
      <p>{children}</p>
    </button>
  );
};

export default Button;
