import React, {ReactElement} from "react";
import {InputProps} from "../Input/Input";
import classes from "./Checkbox.module.css";

export interface CheckboxProps {
    size?: "small"|"medium",
    label?: string,
    icon?: ReactElement,
    checkedIcon?: ReactElement,
    onChange?: () => void,
    onClick?: () => void,
    checked?:boolean,
    defaultChecked?: boolean,
    disabled?:boolean,
    id?:string,
    required?: boolean,
    children?: ReactElement,

}
const Checkbox: React.FC<CheckboxProps> = ({
                                         size,
                                         label,
                                         icon,
                                         checked,
                                         checkedIcon,
                                         onChange,
                                         onClick,
                                         id,
                                         defaultChecked,
                                         disabled,
                                         required,
                                         children}) => {
    return <input className={classes.default} type={"checkbox"}/>;
 };

export default Checkbox;