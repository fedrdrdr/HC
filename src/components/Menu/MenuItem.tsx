import React, { } from "react";
import classes from "./Menu.module.css";

export interface MenuItemProps {
  title?: string;
}


const MenuItem = ({
  title
}: MenuItemProps) => {

  return (
    <li>
      {title}
    </li>
  );
};

export default MenuItem;
