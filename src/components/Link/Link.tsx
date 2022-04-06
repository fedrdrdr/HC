import React, {ReactElement} from "react";
import classes from "./Link.module.css";

export interface LinkProps {

    children?: ReactElement|string;
    path?: string;
    className?: string;
    color?: "black" | "blue" | "violet" | "white" ;
    startIcon?: ReactElement; //todo
    endIcon?: ReactElement;
    style?:React.CSSProperties;
  }


const Link: React.FC<LinkProps> = ({path="#", className, children, color="black",startIcon, endIcon }) => {
    if (startIcon){
        return (
                <a href={path} className={[classes.link, classes[color], className].join(" ")} >
                    {startIcon}<div/>{children}
                </a>
        );
    }
    else if (endIcon){
        return (
            <a href={path}  className={[classes.link, classes[color], className].join(" ")} >
                {children}<div/>{endIcon}
            </a>
        );
    }
    return (
        <a href={path}  className={[classes.link, classes[color], className].join(" ")} >
            {children}
        </a>
    );
};

export default Link;
