import React, { useEffect, useState } from "react";
import classes from "./Accordion.module.css";

function AccordionItem({ title,content }) {
  const [active, setActive] = useState(false);

  function clickHandler() {
    setActive(!active);
  }

  useEffect(() => {}, [active]);
  return (
    <li  className={classes.title} onClick={clickHandler}>
      <p>{title}</p>
      {active && <p className={classes.content}>{content}</p>}
    </li>
  );
}

export default AccordionItem;