import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Link  from '../components/Link/Link';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  export default {
    title: 'Example/Link',
    component: Link,

  
  } as ComponentMeta<typeof Link>;


  const Template: ComponentStory<typeof Link> = (args) =>
   <Router>
       <p style={{fontSize:'14px'}}> вот тут ссылка &nbsp;
           <Link {...args}
            />
       </p>
       <p>и тут</p>
       <Link {...args}
            />
   </Router>;

  export const Primary = Template.bind({});

  Primary.args = {
  children: 'ссылка',

  };