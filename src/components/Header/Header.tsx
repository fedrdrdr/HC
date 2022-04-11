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
}


export const Header = ({ children, accountElements }: HeaderProps) => (
    <header>
        <div className={classes.container}>
            <div className={classes.logo}>
                <LogoDark/>
            </div>
            <div>
                <nav className={classes.nav}>
                    {children}
                </nav>
            </div>
            <div>
                {accountElements}
            </div>
        </div>
    </header>
);
