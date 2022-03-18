import React from 'react';
// import classes from "./Input.module.css";


export interface InputProps {
    label: string;
    icon: string;
    placeholder: string;
    errorText: string;
    filled: boolean;
    size: string;
}
export const Input: React.FC<InputProps> = ({
        size, label, placeholder,icon,errorText,filled
    }) => {



    return (
        <>
        {label
        ? 
        <label>
            <p>{label}</p>
            <input placeholder={placeholder} >
            </input>
        </label>
        :
        <input placeholder={placeholder} >
        </input>}
        </>
    );
};