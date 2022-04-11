import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  Link  from "./Link";
import {BriefcaseIcon} from "../Icons/BriefcaseIcon";
import {DatabaseIcon} from "../Icons/DatabaseIcon";

export default {
    title: "Example/Link",
    component: Link,

  
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) =>
    <>
        <div style={{display:"flex", flexDirection: "column", alignItems: "flex-start"}}>
        <div><Link startIcon={<BriefcaseIcon/>} {...args}/></div>
        <div><Link {...args}/></div>
        <div><Link endIcon={<DatabaseIcon/>} {...args}/></div>
        <div><Link endIcon={<DatabaseIcon/>} startIcon={<BriefcaseIcon/>} {...args}/></div>
        <div><Link nonUnderline {...args}/></div>
        </div>
    </>;
export const Primary = Template.bind({});

Primary.args = {
    children: "Link style",
    // startIcon:<BriefcaseIcon/>,
    // endIcon:<DatabaseIcon/>,
};
