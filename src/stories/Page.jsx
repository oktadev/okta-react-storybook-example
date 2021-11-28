import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import './page.css';
import { Tabs } from './Components';
import { Converter } from './Converter';

export const Page = ({useAuth}) => {
  const [user, login, logout] = useAuth();
  return <article>
    <Header user={user} onLogin={login} onLogout={logout} />
    <section>
      <Tabs>
        <Converter measure="length" label="Length" key="length"></Converter>
        <Converter measure="mass" label="Mass" key="mass"></Converter>
        <Converter measure="volume" label="Volume" key="volume"></Converter>
      </Tabs>
    </section>
  </article>;
}

Page.propTypes = {
  useAuth: PropTypes.func.isRequired
};

Page.defaultProps = {
};