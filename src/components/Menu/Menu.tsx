import React, { ReactElement, useEffect, useState } from "react";
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
  const [close, setClose] = useState(open);
  const [color, setColor] = useState("#0F0F0F");


  function onClickHandler() {
    setClose(!close);
    // if (color === "#0F0F0F") {
    //   setColor("#94368D");
    // }
    // if (color === "#94368D") {
    //   setColor("#0F0F0F");
    // }
  }


  return (
    < >
      {close
        ?
        <div>
          <div className={classes.head}>
            <p
              onClick={onClickHandler}
              className={[classes.title, classes[size]].join(" ")}
            >
              {title}
            </p>
            <More  className={classes.icon_rotate}/>
          </div>
          <ul className={classes.menuList}>
            {children}
          </ul>
        </div>
        :
        <div>
          <div className={classes.head}>
            <p onClick={onClickHandler}
              className={[classes.title, classes[size]].join(" ")}
            >{title}</p>
            <More />
          </div>
        </div>}
    </>
  );
};

export default Menu;
