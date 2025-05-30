import React from 'react';

const LoginForm = () => {
  return (
    <form>
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
  );
};

export default LoginForm;
