import React, {FC, ReactElement} from 'react';
import classes from './Button.module.css';
// import './Button.module.css';

const solidViolet = classes.solidViolet;
const outlineViolet = classes.outlineViolet;
const solidYellow = classes.solidYellow;
const solidRed = classes.solidRed;
const outlineRed = classes.outlineRed;
const flatViolet = classes.flatViolet;
const flatRed = classes.flatRed;


export interface ButtonProps {
  variant?: 'solid' | 'outline' | 'flat';
  color?: 'violet' | 'red' | 'yellow';
  children?: string;
  icon?: string;
  type?: 'button' | 'submit' | 'reset'
  // onClick?: () => void;
  className?: string;
  // onClick?: (event?: React.MouseEvent<any>) => void;
  // onClick?: MouseEvent<any, MouseEvent> => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size?:"Xs"|"S" |"M" |"L" |"Xl";
  style?:React.CSSProperties;

}


const Button = ({
    children,
    onClick,
    variant = 'solid',
    color = 'violet',
    size,
}: ButtonProps) => {
    // const buttonWithIcon = ('' && !icon) || (classes.buttonWithIcon && icon);
    // const classButton = classes[className];
    const classButton =
        (variant === 'solid' && color === 'violet' && solidViolet) ||
        (variant === 'outline' && color === 'violet' && outlineViolet) ||
        (variant === 'solid' && color === 'red' && solidRed) ||
        (variant === 'outline' && color === 'red' && outlineRed) ||
        (variant === 'solid' && color === 'yellow' && solidYellow) ||
        (variant === 'flat' && color === 'violet' && flatViolet) ||
        (variant === 'flat' && color === 'red' && flatRed)

    const getClassBySize = (size) => {
        switch (size) {
            case "Xs":
                return classes.buttonXs;
            case "S":
                return classes.buttonS;
            case "M":
                return classes.buttonM;
            case "L":
                return classes.buttonL;
            case "Xl":
                return classes.buttonXl;

        }
    }

    console.log(size, getClassBySize(size))
    return (
        <button
            // type={type}
            onClick={onClick}
            // работает на storybook
            className={[classes.button, 'button', getClassBySize(size) ,classButton].join(
                ' '
            )}
        >
            {children}
        </button>
    );
};

export default Button;
