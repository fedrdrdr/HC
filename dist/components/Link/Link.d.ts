import React, { ReactElement } from "react";
export interface LinkProps {
    children?: ReactElement | string;
    path?: string;
    className?: string;
    color?: "black" | "blue" | "violet" | "white";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    style?: React.CSSProperties;
    nonUnderline?: boolean | undefined;
}
declare const Link: React.FC<LinkProps>;
export default Link;
