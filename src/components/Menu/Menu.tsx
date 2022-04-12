import React, { ReactElement,useState } from "react";
import classes from "./Menu.module.css";

export interface MenuProps {
  children?: ReactElement | string ;
  className?: string;
  open?: boolean;
  title?: string;
  onClick?: ()=>void
}

const Menu = ({
  children,
  title,
  open=false,

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
          <p onClick={onClickHandler}>{title}</p>
          <ul>
            {children}
          </ul>
        </div>
        :
        <div>
          <p onClick={onClickHandler}>{title}</p>
        </div>}
    </>
  );
};

export default Menu;
