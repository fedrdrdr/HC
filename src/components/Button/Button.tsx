import React, { ReactElement} from "react";
import classes from "./Button.module.css";
// import './Button.module.css';

const solidViolet = classes.solidViolet;
const solidYellow = classes.solidYellow;
const solidRed = classes.solidRed;
const solidWhite = classes.solidWhite;
const solidGreen = classes.solidGreen;

const outlineViolet = classes.outlineViolet;
const outlineRed = classes.outlineRed;
const outlineBlack = classes.outlineBlack;
const outlineWhite = classes.outlineWhite;
const outlineGreen = classes.outlineGreen;

const flatViolet = classes.flatViolet;
const flatRed = classes.flatRed;
const flatWhite = classes.flatWhite;
const flatGreen = classes.flatGreen;
const flatBlack = classes.flatBlack;

export interface ButtonProps {
  variant?: "solid" | "outline" | "flat";
  color?: "violet" | "red" | "yellow"| "black" | "white" | "green";
  children?: ReactElement|string;
  startIcon?: ReactElement|string;
  endIcon?: ReactElement|string;
  type?: "button" | "submit" | "reset"
  // onClick?: () => void;
  className?: string;
  // onClick?: (event?: React.MouseEvent<any>) => void;
  // onClick?: MouseEvent<any, MouseEvent> => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?:"Xs"|"S" |"M" |"L" |"Xl";
  style?:React.CSSProperties;

}


const Button = ({
    children,
    onClick,
    variant = "solid",
    color = "violet",
    size,
    startIcon, endIcon


}: ButtonProps) => {
    // const buttonWithIcon = ('' && !icon) || (classes.buttonWithIcon && icon);
    // const classButton = classes[className];

    switch (variant) {
        case "solid":
    }

    const classButton =
        (variant === "solid" && color === "violet" && solidViolet) ||
        (variant === "solid" && color === "red" && solidRed) ||
        (variant === "solid" && color === "yellow" && solidYellow) ||
        (variant === "solid" && color === "white" && solidWhite) ||
        (variant === "solid" && color === "green" && solidGreen) ||

        (variant === "outline" && color === "violet" && outlineViolet) ||
        (variant === "outline" && color === "red" && outlineRed) ||
        (variant === "outline" && color === "black" && outlineBlack) ||
        (variant === "outline" && color === "white" && outlineWhite) ||
        (variant === "outline" && color === "green" && outlineGreen) ||

        (variant === "flat" && color === "violet" && flatViolet) ||
        (variant === "flat" && color === "red" && flatRed)|| 
        (variant === "flat" && color === "green" && flatGreen) ||
        (variant === "flat" && color === "black" && flatBlack) ||
        (variant === "flat" && color === "white" && flatWhite);

    const getClassBySize = (size:string|undefined) => {
        switch (size) {
            case "Xs":
                return classes.buttonXs;
            case "S":
                return classes.buttonS;
            case "M":
                return classes.buttonM;
            case "L":
                return classes.buttonL;
            case "Xl":
                return classes.buttonXl;

        }
    };

    return (
        <button
            onClick={onClick}
            className={[classes.button, "button",getClassBySize(size), classes[variant], classes[color]].join(
                " "
            )}

        >
            {startIcon}
            <div style={{marginRight:9}}/>
            {children}
            <div style={{marginRight:9}}/>
            {endIcon}
        </button>
    );
};

export default Button;
