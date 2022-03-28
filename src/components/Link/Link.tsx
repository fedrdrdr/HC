import React from 'react';
import { Link as Llink } from "react-router-dom"
import classes from "./Link.module.css"


export interface LinkProps {

    children?: string;
    path?: string;
    className?: string;
    color?: "black" | "blue" | "violet" | "white" ;
    icon?: string;
  }


const Link: React.FC<LinkProps> = ({path='#', className, children, color="black", ...props}) => {
    return (
 
        <Llink to={path} className={[classes.link, classes[color], className].join(" ")}>
            {children}
        </Llink>

    );
}

export default Link;