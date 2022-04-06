import React, {ReactElement} from 'react';
import classes from './Link.module.css';

export interface LinkProps {

    children?: ReactElement|string;
    path?: string;
    className?: string;
    color?: 'black' | 'blue' | 'violet' | 'white' ;
    startIcon?: ReactElement|string;
    endIcon?: ReactElement|string;
    style?:React.CSSProperties;
  }


const Link: React.FC<LinkProps> = ({path='#', className, children, color='black'}) => {
    return (
        <a href={path} className={[classes.link, classes[color], className].join(' ')}>
            {children}
        </a>
    );
};

export default Link;
