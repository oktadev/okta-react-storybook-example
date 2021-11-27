import React from 'react';

import { Tabs } from './Components';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <div label="One">Content One</div>,
    <div label="Two">Content Two</div>,
    <div label="Three">Content Three</div>,
  ]
};