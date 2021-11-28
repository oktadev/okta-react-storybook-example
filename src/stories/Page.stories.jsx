import React from 'react';
import { Page } from './Page';

export default {
  title: 'Pages/Page',
  component: Page,
};

const mockUseAuth = (loggedIn) => () => [
  loggedIn ? {given_name: "Username"} : undefined, 
  () => {}, 
  () => {}
];

const Template = (args) => <Page useAuth={mockUseAuth(true)} {...args}/>;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  useAuth: mockUseAuth(true),
};

LoggedIn.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  useAuth: mockUseAuth(false),
};

LoggedOut.parameters = {
  controls: { hideNoControlsWarning: true },
};