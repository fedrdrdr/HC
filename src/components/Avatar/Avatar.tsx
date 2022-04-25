import React, {ReactElement} from "react";
import classes from "./Avatar.module.css";

export interface AvatarProps {
    status:"online"|"offline";
    className?:string;
    size: "xs"|"s"|"m"|"l"|"xl";
    src:string;
    alt:string;
}

const Avatar: React.FC<AvatarProps> = ({
     status,
     src,
     alt,
     size,
     className
 }) => {

    if(status === "online"){
        return (
            <div style={{position:"relative"}} className={classes[size]}>
                <img src={src} alt={alt} className={[className, classes[size], classes.avatar].join(" ")}/>
                <div className={classes.badge}/>
            </div>
        );
    }
    console.log(status);
    return (
            <img src={src} alt={alt} className={[className, classes[size], classes.avatar].join(" ")}/>
    );
};

export default Avatar;
