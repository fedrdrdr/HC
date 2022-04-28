import React, {ReactElement} from "react";
import classes from "./Avatar.module.css";

export interface AvatarProps {
    status:"online"|"offline";
    className?:string;
    badgeClassName?:string;
    size: "xs"|"s"|"m"|"l"|"xl";
    src:string;
    alt:string;
    style?:React.CSSProperties;
}

const Avatar: React.FC<AvatarProps> = ({
     status,
     src,
     alt,
     size,
     style,
     className,
     badgeClassName
 }) => {


    if(status === "online"){
        return (
            <div style={{position:"relative"}} className={classes[size]}>
                <img src={src} alt={alt} className={[className, classes[size], classes.avatar].join(" ")} style={style}/>
                <div className={classes.badge}/>
            </div>
        );
    }
    return (
            <img src={src} alt={alt} className={[className, classes[size], classes.avatar].join(" ")} style={style}/>
    );
};

export default Avatar;
