import React from 'react';
import classes from './Link.module.css';


//dfgdfg

export interface LinkProps {

    children?: string;
    path?: string;
    className?: string;
    color?: 'black' | 'blue' | 'violet' | 'white' ;
    icon?: string;
  }


const Link: React.FC<LinkProps> = ({path='#', className, children, color='black'}) => {
    return (
 
        <a href={path} className={[classes.link, classes[color], className].join(' ')}>
            {children}
        </a>

    );
};

export default Link;
