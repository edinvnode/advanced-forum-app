import React, { useState } from 'react';

import { usePostContext } from '../hooks/usePostContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Create = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const { dispatch } = usePostContext();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }

    const username = { email, password };

    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify(username),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      //setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmail('');
      setPassword('');
      dispatch({ type: 'CREATE_WORKOUT', payload: json });
      setMessage('Email and password accepted.');
      setError('');
    }
  };

  return (
    <div className="form">
      <form>
        <p>Enter your email and password</p>
        <div>
          <label className="lbl-email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="lbl-password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button onClick={handleSubmit}>Create Account</button>
        </div>
        <div>
          <p style={{ color: 'red' }}>{error && error}</p>
        </div>
        <div>
          <p style={{ color: 'blue' }}>{message && message}</p>
        </div>
      </form>
    </div>
  );
};

export default Create;
