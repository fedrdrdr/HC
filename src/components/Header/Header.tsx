import React, {ReactChild, ReactElement, ReactNode} from 'react';
import  Button from '../Button/Button';
import "./header.css";
import { Link as RouterLink } from "react-router-dom";
import Link from "../Link/Link";
// import logo from "./assets/logo.svg"

type User = {
  name: string;
};

export interface HeaderProps {
  children?: ReactElement;
  accountElements?: ReactElement;
  style?:React.CSSProperties;
}

const logo = require("../../stories/assets/logo.svg") as string;

export const Header = ({ children, accountElements, style }: HeaderProps) => (
    <header>
        <div className="container">
            <div>
                <img src={logo} alt="alt" />
            </div>
            <div>
                <nav className="nav">
                    {children}
                </nav>
            </div>
            <div>
                {accountElements}
            </div>
        </div>
    </header>
);
