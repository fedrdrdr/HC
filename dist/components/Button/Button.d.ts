import React, { ReactElement } from "react";
export interface ButtonProps {
    variant?: "solid" | "outline" | "flat";
    color?: "violet" | "red" | "yellow" | "black" | "white" | "green";
    children?: ReactElement | string;
    icon?: string;
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    size?: "Xs" | "S" | "M" | "L" | "Xl";
    style?: React.CSSProperties;
}
declare const Button: ({ children, onClick, variant, color, size, }: ButtonProps) => JSX.Element;
export default Button;
