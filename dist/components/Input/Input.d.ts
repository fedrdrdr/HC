import React from "react";
export interface InputProps {
    label?: string;
    icon?: string;
    placeholder?: string;
    errorText?: string;
    size?: "xl" | "l" | "m" | "s";
    type?: "text" | "password" | "email";
    className?: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
