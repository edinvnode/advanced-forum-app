import React, { useState } from 'react';

const Create = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email);
    alert(password);
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
