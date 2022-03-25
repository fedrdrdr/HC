import React from 'react';
import classes from "./Input.module.css";


export interface InputProps {
    children: string;
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
        size='l', label, placeholder,icon,errorText, children
    }) => {



    return (
        <>
        {label
        ? 
        <label>
            <p>{label}</p>
            <input placeholder={placeholder} className={[classes.input, classes[size]].join(" ")} defaultValue={children} />
                
        </label>
        :
        <input placeholder={placeholder} className={classes.input} value={children} />
            // {children}
       
        }
        </>
    );
};

export default Input