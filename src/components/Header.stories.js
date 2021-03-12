import React from 'react';

import { Header } from './Header';

const HeaderStory = {
  title: 'Example/Header',
  component: Header,
};

export default HeaderStory;

const Template = (args) => <Header {...args} />;

const defaultArgs = {
  onLogin: () => {},
  onLogout: () => {},
  onCreateAccount: () => {},
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...defaultArgs,
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...defaultArgs,
};
