import React from 'react';
import { titles } from './data';

//components
import LoginForm from './components/LoginForm';
import MainPage from './components/MainPage';

//router
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#" className="login-button">
          Log In
        </a>
      </nav>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" exact element={<MainPage titles={titles} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
