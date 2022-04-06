import {ComponentMeta, ComponentStory} from "@storybook/react";
import Button from "../components/Button/Button";
import React from "react";
import Footer from "../components/Footer/Footer";
import {Header} from "../components/Header/Header";
export default {
    title: "Footer",
    component: Footer,
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});
