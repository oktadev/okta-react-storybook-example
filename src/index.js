import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Page } from './stories/Page';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { useAuth } from './auth';

const oktaAuth = new OktaAuth({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  clientId: '{clientId}',
  redirectUri: `/callback`,
});

function SecuredRoutes(props) {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };
  
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Route path="/" exact render={(props) => <App {...props} useAuth={useAuth}/>} />
      <SecureRoute path="/converter" exact render={(props) => <Page {...props} useAuth={useAuth}/>} />
      <Route path="/callback" component={LoginCallback} />
    </Security>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SecuredRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();