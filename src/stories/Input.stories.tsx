import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import   Input  from "../components/Input/Input";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Input",
    component: Input,

    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    icon: "static/media/src/stories/assets/broadcast_icon.svg",
    placeholder: "Введите текст...."
};