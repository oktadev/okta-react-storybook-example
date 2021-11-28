import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './header.css';

export const Header = ({ user, onLogin, onLogout }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>Unit Converter</h1>
      </div>
      {user ? <div> Hello {user.given_name} </div> : ""}
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};