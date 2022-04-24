import React, {ReactElement} from "react";
import classes from "../Textarea/Textarea.module.css";

export interface TextareaProps {
    label?: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
    onChange?: (e:React.ChangeEvent<HTMLTextAreaElement>) => void;
    onError?: () => void;
    value?: any;
    maxLength: number
}
const Textarea: React.FC<TextareaProps> = ({
                                         label,
                                         placeholder = "placeholder",
                                         error,
                                         errorMessage,
                                         value,
                                         className,
                                         onChange,
                                         onError, maxLength

                                     }) => {
    const [isFilled, setFilled] = React.useState(false);

    const handleOnChange = (e: any) => {
        if (onChange !== undefined) {
            onChange(e);
        }
    };
    window.onload=function(){
        const textarea: HTMLElement | null = document.querySelector("textarea");
        if (textarea) {
            textarea.addEventListener("keyup", e => {
                textarea.style.height = "206px";
                const target = e.target as Element;
                const scHeight = target.scrollHeight;
                textarea.style.height = `${scHeight}px`;
                console.log("!!!", scHeight);
            });
        }
    };

    return (
        <>
            {
                label ? (
                    <>
                    <label>
                        <p>
                        {label}
                        </p>
                    </label>
                        <textarea
                            className={[error && classes.error, className].join(" ")}
                            placeholder={placeholder}
                            onError={onError}
                            onChange={handleOnChange}
                            value={value}
                            maxLength={maxLength}
                        />
                    </>

                ) : (
                    <div style={{display:"flex", alignItems:"center"}}>
                        <textarea
                            placeholder={placeholder}
                            onError={onError}
                            value={value}
                            className={[error && classes.error, className].join(" ")}
                            onChange={handleOnChange}
                            maxLength={maxLength}

                        />
                    </div>
                )
            }
            {error && <div className={classes.textError}>{errorMessage}</div>}
        </>

    );
};

export default Textarea;
