import React, { FC } from "react";

import classes from "./Button.module.css";
// не получилось подключить classnames и воспользоваться classes.module

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
  children: string;
  icon?: string;
  onClick?: () => void;
}

// export interface ButtonProps {
//   className?:
//     | "solidViolet"
//     | "outlineViolet"
//     | "solidYellow"
//     | "solidRed"
//     | "outlineRed"

//     ;
//   children: string;
//   icon?: string;
//   onClick?: () => void;
// }

const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  children,
  onClick,
  ...props
}) => {
  const buttonWithIcon = ("" && !icon) || (classes.buttonWithIcon && icon);
  const classButton = classes.className;
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
      className={[
        className,
        classButton,
        classButton2,
        classes.button,
        "button",
        buttonWithIcon,
      ].join(" ")}
      //  работает на evvve
      // className={[classButton2, classes.button].join(" ")}
      // className={[classes.className, classes.button].join(" ")}
      {...props}
    >
      {icon && <img src={icon} />}
      {console.log(
        className,
        classes,
        classes.className,
        classButton,
        classButton2
      )}
      <p>{children}</p>
    </button>
  );
};

export default Button;
