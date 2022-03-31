import React, { FC } from 'react';
import classes from './Button.module.css';

const solidViolet = classes.solidViolet;
const outlineViolet = classes.outlineViolet;
const solidYellow = classes.solidYellow;
const solidRed = classes.solidRed;
const outlineRed = classes.outlineRed;



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
}




const Button: React.FC<ButtonProps> = ({
    variant = 'solid',
    color = 'violet',
    type,
    icon,
    children,
    onClick,
    className,
    ...props
}) => {
    const buttonWithIcon = ('' && !icon) || (classes.buttonWithIcon && icon);
    // const classButton = classes[className];
    const classButton =
    (variant === 'solid' && color === 'violet' && solidViolet) ||
    (variant === 'outline' && color === 'violet' && outlineViolet) ||
    (variant === 'solid' && color === 'red' && solidRed) ||
    (variant === 'outline' && color === 'red' && outlineRed) ||
    (variant === 'solid' && color === 'yellow' && solidYellow);

    return (
        <button
            type={type}
            onClick={onClick}
            // работает на storybook
            className={[classes.button, 'button', classButton, buttonWithIcon, className].join(
                ' '
            )}
            {...props}
        >
            {icon && <img src={icon} />}
            {console.log('classButton', classButton)}
            <p>{children}</p>
        </button>
    );
};

export default Button;
