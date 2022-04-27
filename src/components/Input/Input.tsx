import React, {FC, ReactElement} from "react";
import classes from "./Input.module.css";

export interface InputProps {
    name?: string;
    label?: string;
    startIcon?: ReactElement | string;
    endIcon?: ReactElement | string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    size?: "l" | "m" | "s";
    type?: "text" | "password" | "email" ;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onError?: () => void;
    id?: string;
    value?: any;
    ref?: React.LegacyRef<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({
    name,
    size = "l",
    label,
    placeholder = "placeholder",
    startIcon,
    endIcon,
    error,
    errorMessage,
    type = "text",
    value,
    className,
    onChange,
    onError,
    ref
}) => {
    const [isFilled, setFilled] = React.useState(false);

    const handleOnChange = (e: any) => {
        if (onChange !== undefined) {
            onChange(e);
        }
    };

    return (
        <>
            {
                label ? (
                    <label>
                        <p>{label}</p>
                        <input
                            name={name}
                            type={type}
                            className={[classes.input, classes[size], isFilled && classes.filled, error && classes.error, className].join(" ")}
                            placeholder={placeholder}
                            onError={onError}
                            onChange={handleOnChange}
                            value={value}
                        />

                    </label>
                ) : (
                    <div style={{display: "flex", alignItems: "center"}}>
                        <div className={classes.icon}>{startIcon}</div>
                        <input
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            onError={onError}
                            value={value}
                            className={[classes.input, classes[size], isFilled && classes.filled, error && classes.error, className].join(" ")}
                            onChange={handleOnChange}

                        />
                    </div>
                )
            }
            {error && <div className={classes.textError}>{errorMessage}</div>}
        </>

    );
};

export default Input;
