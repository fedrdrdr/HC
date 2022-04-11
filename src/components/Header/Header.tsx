import React, {ReactChild, ReactElement, ReactNode} from "react";
import  Button from "../Button/Button";
import classes from  "./Header.module.css";
import {LogoDark} from "../Icons/LogoDark";
// import  {ReactComponent as Logo} from "../../stories/assets/logo_dark.svg";


type User = {
  name: string;
};

export interface HeaderProps {
  children?: ReactElement;
  accountElements?: ReactElement;
  style?:React.CSSProperties;
  className?:string;
}


export const Header = ({ children, accountElements }: HeaderProps) => (
        <div className={classes.container}>
            <header className={classes.header}>
            <div className={classes.logo}>
                <LogoDark/>
            </div>
            <div>
                <nav className={classes.nav}>
                    {children}
                </nav>
            </div>
            <div className={classes.buttons}>
                {accountElements}
            </div>
            </header>
        </div>
);
