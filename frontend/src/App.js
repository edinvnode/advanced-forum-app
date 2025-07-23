import React from 'react';
import { titles } from './data';

//components
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';
import Profile from './components/Profile';
import Topic from './components/Topic';
import Create from './components/Create';
import Home from './components/Home';

import { useAuthContext } from './hooks/useAuthContext';

//router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/login" className="login-link">
            Login
          </Link>
          <Link to="/" className="login-link">
            Main Page
          </Link>
          <Link to="/create" className="login-link">
            Crate Account
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            exact
            element={
              user ? <MainPage titles={titles} /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create" element={<Create />} />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/topic"
            element={user ? <Topic /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
