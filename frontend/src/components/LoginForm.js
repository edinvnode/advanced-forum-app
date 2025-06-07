import React from 'react';

const LoginForm = () => {
  return (
    <div className="form">
      <form>
        <p>Enter your username and password</p>
        <div>
          <label className="lbl-email">Email</label>
          <input type="email" />
        </div>
        <div>
          <label className="lbl-password">Password</label>
          <input type="password" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
