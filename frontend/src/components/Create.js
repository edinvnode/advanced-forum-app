import React, { useState } from 'react';

const Create = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }

    const workout = { title, load, reps };

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmail('');
      setPassword('');
      dispatch({ type: 'CREATE_WORKOUT', payload: json });
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
      </form>
    </div>
  );
};

export default Create;
