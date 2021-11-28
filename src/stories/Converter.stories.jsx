import React from 'react';
import { Converter } from './Converter';

export default {
  title: 'Components/Converter',
  component: Converter,
};

const Template = (args) => <Converter {...args} />;

export const Default = Template.bind({});

Default.args = {
  measure: 'length'
};

export const Mass = Template.bind({});

Mass.args = {
  measure: 'mass'
};