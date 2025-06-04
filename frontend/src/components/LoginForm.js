import React from 'react';

const LoginForm = () => {
  return (
    <div className="form">
      <form>
        <p>Enter your username and password</p>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
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
