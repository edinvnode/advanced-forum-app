import React from 'react';
import { titles } from './data';

//components
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';
import Profile from './components/Profile';
import Topic from './components/Topic';
import Create from './components/Create';

//router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
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
        </nav>
        <Routes>
          <Route path="/" exact element={<MainPage titles={titles} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/topic" element={<Topic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
