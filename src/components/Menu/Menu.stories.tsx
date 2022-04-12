import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  Menu  from "./Menu";


export default {
    title: "Example/Menu",
    component: Menu,

  
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) =>
    <>
        <div style={{display:"flex", flexDirection: "column", alignItems: "flex-start"}}>
        <Menu {...args} />
          <p>sdfsdfsdf</p>
        {/* </Menu> */}
        </div>
    </>;
export const Primary = Template.bind({});

Primary.args = {
    children: "trolololo",
    // startIcon:<BriefcaseIcon/>,
    // endIcon:<DatabaseIcon/>,
};
