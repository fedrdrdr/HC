import React, { ReactElement } from "react";
export interface HeaderProps {
    children?: ReactElement;
    accountElements?: ReactElement;
    style?: React.CSSProperties;
    className?: string;
}
export declare const Header: ({ children, accountElements }: HeaderProps) => JSX.Element;
