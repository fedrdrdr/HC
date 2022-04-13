import React, { ReactElement, useEffect, useState } from "react";
import { More } from "../Icons/More";
import classes from "./Menu.module.css";

export interface MenuProps {
  children?: ReactElement | string;
  className?: string;
  open?: boolean;
  title: string;
  size: "l" | "m";
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
    setColor("#94368D");
    console.log(color);
  }

  useEffect(()=>{
    setColor("#94368D");
  },[close]);
  return (
    < >
      {close
        ?
        <div>
          <p
            onClick={onClickHandler}
            className={[classes.title, classes[size]].join(" ")}
          >
            {title}
          </p>
          <span><More className={color} /> </span>
          <ul className={classes.menuList}>
            {children}
          </ul>
        </div>
        :
        <div>
          <p onClick={onClickHandler}
            className={[classes.title, classes[size]].join(" ")}
          >{title}</p>
          <span><More stroke={color} /> </span>
        </div>}
    </>
  );
};

export default Menu;
