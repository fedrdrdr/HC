import React, {ReactElement} from "react";
import classes from "./Link.module.css";

export interface LinkProps {

    children?: ReactElement|string;
    path?: string;
    className?: string;
    color?: "black" | "blue" | "violet" | "white" ;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    style?:React.CSSProperties;
    nonUnderline?:boolean|undefined;
  }


const Link: React.FC<LinkProps> = ({path="#", className, children, color="black",startIcon, endIcon, nonUnderline }) => {

    const nonUnderlineLink = (nonUnderline:boolean|undefined) => {
        switch (nonUnderline) {
            case true:
                return classes.none_border;
            case false:
                return "";
        }
    };

    if (startIcon){
        return (
                <a href={path} className={[classes.link, classes[color],nonUnderlineLink(nonUnderline), className].join(" ")} >
                    {startIcon}<div/>{children}
                </a>
        );
    }
    else if (endIcon){
        return (
            <a href={path}  className={[classes.link, classes[color],nonUnderlineLink(nonUnderline), className].join(" ")} >
                {children}<div/>{endIcon}
            </a>
        );
    }
    return (
        <a href={path}  className={[classes.link, classes[color],nonUnderlineLink(nonUnderline), className].join(" ")} >
            {children}
        </a>
    );
};

export default Link;
