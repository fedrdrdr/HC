import React, { useEffect, useState } from "react";
// import classes from "./Questions.module.css";

function AccordionItem({ title,content }) {
  const [active, setActive] = useState(false);

  function clickHandler() {
    setActive(!active);
  }

  useEffect(() => {}, [active]);
  return (
    <li  onClick={clickHandler}>
      <p>{title}</p>
      {active && <p >{content}</p>}
    </li>
  );
}

export default AccordionItem;