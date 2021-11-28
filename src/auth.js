import { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

export const useAuth = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authState?.isAuthenticated) {
      if (!user) {
        oktaAuth.getUser().then(setUser);
      }
    } else {
      setUser(null);
    }
  }, [authState, user, oktaAuth]);

  const login = async () => oktaAuth.signInWithRedirect('/');
  const logout = async () => oktaAuth.signOut('/');

  return [user, login, logout];
};