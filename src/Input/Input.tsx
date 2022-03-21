import React from 'react';
import classes from "./Input.module.css";


export interface InputProps {
    className?:
    | "solidViolet"
    | "outlineViolet"
    | "solidYellow"
    | "solidRed"
    | "outlineRed";
    label?: string;
    icon?: string;
    placeholder?: string;
    errorText?: string;
    size?: 
    | "xl"
    | "l"
    | "m"
    | "s";
}
 const Input: React.FC<InputProps> = ({
        size='l', label, placeholder,icon,errorText
    }) => {



    return (
        <>
        {label
        ? 
        <label>
            <p>{label}</p>
            <input placeholder={placeholder} className={[classes.input, classes[size]].join(" ")} >
            </input>
        </label>
        :
        <input placeholder={placeholder} className={classes.input} >
        </input>}
        </>
    );
};

export default Input