import React, { ReactElement, useState } from "react";
import { More } from "../Icons/More";
import classes from "./Menu.module.css";


export interface MenuProps {
  children?: ReactElement | string | ReactElement[];
  className?: string;
  open?: boolean;
  title: string;
  size?: "l" | "m";
  onClick?: () => void
}

const Menu = ({
  children,
  title,
  open = false,
  size = "l",
}: MenuProps) => {
  const [isOpen, setOpen] = useState(open);


  function onClickHandler() {
    setOpen(!isOpen);
    // if (color === "#0F0F0F") {
    //   setColor("#94368D");
    // }
    // if (color === "#94368D") {
    //   setColor("#0F0F0F");
    // }
  }


  return (
      <div>
        <div className={classes.head} onClick={onClickHandler}>
          <p
              className={[classes.title, classes[size]].join(" ")}
          >
            {title}
          </p>
          <More stroke={isOpen? "red" : "#0F0F0F"}  className={isOpen? "" : classes.icon_rotate}/>
        </div>
        {isOpen && <ul className={classes.menuList}>
          {children}
        </ul>
        }
      </div>
  );
};

export default Menu;
