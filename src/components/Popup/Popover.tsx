import React, {ReactElement} from "react";
import classes from "./Popover.module.css";

export interface PopoverProps {
    name: string;
    message: string;
    avatar: HTMLImageElement;
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
       <div className={[className, classes[anchorOrigin]].join(" ")}>
           <div>
               {avatar}
           </div>
           <div>
               <div>{name}</div>
               <div>{message}</div>
           </div>
       </div>
    );
};

export default Popover;
