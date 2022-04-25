import React, {ReactElement} from "react";
import classes from "./Popover.module.css";

export interface PopoverProps {
    name: string;
    message: string;
    avatar: HTMLImageElement|ReactElement;
    className?:string;
    anchorOrigin: "right"|"left";
}

const Popover: React.FC<PopoverProps> = ({
    name,
    message,
    avatar,
    anchorOrigin,
    className
    }) => {


    return (
       <div className={[className, classes.container, classes[anchorOrigin]].join(" ")}>
           <div >
               {avatar}
           </div>
           <div className={classes.text}>
               <div className={classes.name}>{name}</div>
               <div className={classes.message}>{message}</div>
           </div>
       </div>
    );
};

export default Popover;
