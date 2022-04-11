import React from "react";
import { AccordionEntry } from "./AccordionItem";
export interface AccordionProps {
    items: AccordionEntry[];
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
