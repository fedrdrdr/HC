import React, {FC, ReactElement} from "react";
import classes from "./Input.module.css";

export interface InputProps {
  label?: string;
  startIcon?: ReactElement|string;
  endIcon?: ReactElement|string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  size?:  "l" | "m" | "s";
  type?: "text" | "password" | "email";
  className?: string;
  onChange?: () => void;
  onError?: () => void;
  id?: string;
  value?: any;
  ref?: React.LegacyRef<HTMLInputElement>
}
const Input: React.FC<InputProps> = ({
    size = "l",
    label,
    placeholder = "placeholder",
    startIcon,
    endIcon,
    error,
    errorMessage,
    type = "text",
    className,
    onChange,
    onError,
    ref
}) => {
    const [isFilled, setFilled] = React.useState(false);
    return (
        <>
            {
                label ? (
                    <label>
                        <p>{label}</p>
                        <input
                            type={type}
                            className={[classes.input, classes[size],isFilled && classes.filled, error && classes.error].join(" ")}
                            placeholder={placeholder}
                            onError={onError}
                            ref={ref}
                        />

                    </label>
                ) : (
                    <div style={{display:"flex", alignItems:"center"}}>
                        <div className={classes.icon}>{startIcon}</div>
                    <input
                        type={type}
                        placeholder={placeholder}
                        onError={onError}
                        ref={ref}
                        className={[classes.input, classes[size], isFilled && classes.filled, error && classes.error].join(" ")}
                        onChange={()=>{
                            setFilled(true);
                        }}

                    />
                    </div>
                )
            }
            {error && <div className={classes.textError}>{errorMessage}</div>}
        </>

    );
};

export default Input;
