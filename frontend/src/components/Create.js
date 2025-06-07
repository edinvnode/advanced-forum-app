import React from 'react';

const Create = () => {
  return (
    <div className="form">
      <form>
        <p>Enter your email and password</p>
        <div>
          <label className="lbl-email">Email</label>
          <input type="email" />
        </div>
        <div>
          <label className="lbl-password">Password</label>
          <input type="password" />
        </div>
        <div>
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
