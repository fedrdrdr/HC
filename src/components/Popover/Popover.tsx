import React, {ReactElement} from "react";
import classes from "./Popover.module.css";

export interface PopoverProps {
    name: string;
    message: string;
    avatar: HTMLImageElement|ReactElement;
    className?:string;
    anchorOrigin: "right"|"left";
    children?:ReactElement;
    style?:React.CSSProperties;
}

const Popover: React.FC<PopoverProps> = ({
    name,
    children,
    message,
    avatar,
    anchorOrigin,
    className,
    style
    }) => {


    return (
       <div className={[className, classes.container, classes[anchorOrigin]].join(" ")} style={style}>
           <div className={classes.profile}>
           <div>
               {avatar}
           </div>
           <div className={classes.text}>
               <div className={classes.name}>{name}</div>
               <div className={classes.message}>{message}</div>
           </div>
           </div>
           {children}
       </div>
    );
};

export default Popover;
