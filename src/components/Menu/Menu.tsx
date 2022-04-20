import React, { ReactElement, useState } from "react";
import { More } from "../Icons/More";
import classes from "./Menu.module.css";


export interface MenuProps {
  children?: ReactElement | string | ReactElement[];
  className?: string;
  open?: boolean;
  title: string;
  size?: "l" | "m";
  // todo
  startIcon?: ReactElement;
  endIcon?: "more" | "another";
  onClick?: () => void
}


const icons = {
  more: More
};

const Menu = ({
  children,
  title,
  open = false,
  size = "l",
  endIcon = "more",
}: MenuProps) => {
  const [isOpen, setOpen] = useState(open);
  const Icon = icons[endIcon];

  function onClickHandler() {
    setOpen(!isOpen);
    // if (color === "#0F0F0F") {
    //   setColor("#94368D");
    // }
    // if (color === "#94368D") {
    //   setColor("#0F0F0F");
    // }
  }
  const rootClasses = {
    "more": !isOpen ? "" : classes.icon_rotate,
  };
  const className = rootClasses[endIcon];
  return (
    <div>
      <div className={classes.head} onClick={onClickHandler}>
        <p
          className={classes[size]}
        >
          {title}
        </p>
        {/* todo */}
        {/* {endIcon} */}
        <Icon isOpen={isOpen} className={className} />
      </div>
      {isOpen && <ul className={classes.menuList}>
        {children}
      </ul>
      }
    </div>
  );
};

export default Menu;
