import React from "react";
import AccordionItem ,{AccordionEntry} from "./AccordionItem";
import classes from "./Accordion.module.css";

export interface AccordionProps {

  items: AccordionEntry[];
}
const Accordion: React.FC<AccordionProps> = ({
    items
}) => {



    return (
        <ul className={classes.list}>
            {items.map(el =>
                <AccordionItem
                    title={el.title}
                    content={el.content}
                    key={el.content}
                />

            )}
        </ul>
    );
};

export default Accordion;
