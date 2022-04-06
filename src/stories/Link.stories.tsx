import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Link  from '../components/Link/Link';
export default {
    title: 'Example/Link',
    component: Link,

  
} as ComponentMeta<typeof Link>;

const briefcase = require("./assets/icons/briefcase.svg") as string;
const database = require("./assets/icons/database.svg") as string;


const Template: ComponentStory<typeof Link> = (args) =>
    <>
        <div><Link startIcon={briefcase} {...args}/></div>
        <div><Link {...args}/></div>
        <div><Link {...args} endIcon={database}/></div>
    </>;
export const Primary = Template.bind({});

Primary.args = {
    children: 'Link style',
};
