import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  Link  from "../components/Link/Link";
import {ReactComponent as BriefcaseIcon} from "./assets/icons/briefcase.svg";
import {ReactComponent as DatabaseIcon} from "./assets/icons/database.svg";

export default {
    title: "Example/Link",
    component: Link,

  
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) =>
    <>
        <div><Link startIcon={<BriefcaseIcon/>} {...args}/></div>
        <div><Link {...args}/></div>
        <div><Link endIcon={<DatabaseIcon/>} {...args}/></div>
    </>;
export const Primary = Template.bind({});

Primary.args = {
    children: "Link style",
    // startIcon:<BriefcaseIcon/>,
    // endIcon:<DatabaseIcon/>,
};
