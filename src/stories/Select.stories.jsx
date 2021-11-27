import React from 'react';

import { Select } from './Components';

export default {
  title: 'Components/Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: 'medium',
  label: 'Select an Option',
  options: [
    { value: 'a', description: 'Option A' },
    { value: 'b', description: 'Option B' },
    { value: 'c', description: 'Option C' },
  ]
};

export const Large = Template.bind({});

Large.args = {
  size: 'large',
  label: 'Select an Option',
  options: [
    { value: 'a', description: 'Option A' },
    { value: 'b', description: 'Option B' },
    { value: 'c', description: 'Option C' },
  ]
};