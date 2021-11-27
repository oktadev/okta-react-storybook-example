import React from 'react';

import { Input } from './Components';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  label: 'Normal Input',
  placeholder: 'Enter your value',
  size: 'normal'
};

export const Large = Template.bind({});

Large.args = {
  label: 'Large Input',
  placeholder: 'Enter your value',
  size: 'large'
};

export const Number = Template.bind({});

Number.args = {
  label: 'Integer Number',
  placeholder: 'Enter your value',
  size: 'large',
  type: 'number'
};

export const FloatingPoint = Template.bind({});

FloatingPoint.args = {
  label: 'Floating Point Number',
  placeholder: 'Enter your value',
  size: 'large',
  type: 'floating-point'
};