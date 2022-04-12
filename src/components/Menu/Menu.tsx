import React, { ReactElement, useState } from "react";
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

  function onClickHandler() {
    setClose(!close);
  }

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
          <span><More fill={"#0F0F0F"} /> </span>
          <ul className={classes.menuList}>
            {children}
          </ul>
        </div>
        :
        <div>
          <p onClick={onClickHandler}
            className={[classes.title, classes[size]].join(" ")}
          >{title}</p>
          <span><More fill={"#94368D"} /> </span>
        </div>}
    </>
  );
};

export default Menu;
