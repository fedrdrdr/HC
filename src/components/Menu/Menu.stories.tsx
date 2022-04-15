import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  Menu  from "./Menu";
import { More } from "../Icons/More";

export default {
    title: "Example/Menu",
    component: Menu,

  
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) =>

    <>
        <div style={{display:"flex", flexDirection: "column", alignItems: "flex-start"}}>
        <Menu title="sdfdf" size='l' endIcon = 'more'
        //  endIcon={<More stroke={isOpen? "#0F0F0F" : "#94368D"}  className={!isOpen? "" : classes.icon_rotate}/>}
         >
          <li>dfgfdg</li>
          <li>sdgsd</li>
        </Menu>
          
        {/* </Menu> */}
        </div>
    </>;
export const Primary = Template.bind({});

Primary.args = {
    children: "trolololo",

};
