import './App.css';
import { Link } from 'react-router-dom';
import { Header } from './stories/Header';

export const App = ({useAuth}) => {
  const [user, login, logout] = useAuth();

  return (
    <div className="App">
      <Header user={user} onLogin={login} onLogout={logout} />
      <h1>Unit Converter</h1>
      <p>
      <Link to="/converter">Go to the app!</Link>
      </p>
    </div>
  );
}