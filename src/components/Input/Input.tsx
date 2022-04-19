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
    onError
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
                            className={[classes.input, classes[size],isFilled ? classes.filled : "", error && classes.error].join(" ")}
                            placeholder={placeholder}
                            onError={onError}

                        />
                    </label>
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className={[classes.input, classes[size], isFilled ? classes.filled : "", error && classes.error].join(" ")}
                        onChange={()=>{
                            setFilled(true);
                        }}
            
                    />
                )
                // {children}
            }
            {error && <div className={classes.textError}>{errorMessage}</div>}
        </>

    );
};

export default Input;
