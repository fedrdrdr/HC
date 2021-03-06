import React, { ReactElement } from "react";
import styles from "./Link.module.css";

export interface LinkProps {
    children: ReactElement | string;
    className?: string;
    color?: "black" | "blue" | "violet" | "white" ;
    size?: "s" | "m" | "l";
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    style?:React.CSSProperties;
    nonUnderline?: boolean | undefined;
  }

const Link = (props: LinkProps) => {
    const {
      className,
      size = "m",
      children,
      color = "black",
      startIcon,
      style,
      endIcon,
      nonUnderline
    } = props;

    const {
      none_border,
      link,
      mr,
      ml,
      icon,
    } = styles;


    return (
        <div style={style} className={[
            link,
            styles[color],
            styles[size],
            nonUnderline ? none_border : "",
            className
          ].join(" ")}
        >
            {startIcon && (
              <div className={[mr, icon].join(" ")}>
                {startIcon}
              </div>
            )}
              {children}
            {endIcon && (
              <div className={[ml, icon].join(" ")}>
                {endIcon}
              </div>
            )}
        </div>
    );
};

export default Link;
