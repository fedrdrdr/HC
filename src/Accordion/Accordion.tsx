import React from 'react';
import AccordionItem from './AccordionItem'

interface AccordionEntry {
    title: string;
    content: string;
    key: any;
}
export interface AccordionProps {

    children: AccordionEntry[];
}
 const Accordion: React.FC<AccordionProps> = ({
        children
    }) => {



    return (
        <ul>
            {children.map(el=>
                <AccordionItem 
                title={el.title}
                content={el.content}
                key={el.content}
                />
                
                )}
        </ul>
    );
};

export default Accordion