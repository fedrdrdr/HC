/// <reference types="react" />
export interface AccordionEntry {
    title: string;
    content: string;
}
declare function AccordionItem({ title, content }: AccordionEntry): JSX.Element;
export default AccordionItem;
