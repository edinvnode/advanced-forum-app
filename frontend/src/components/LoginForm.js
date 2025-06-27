import React, { useState, useContext } from 'react';
import { UserContext } from '../../App';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch } = useContext(UserContext);

  const handleSubmit = () => {
    /*
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: 'invalid Email ID', classes: 'red darken-3' });
      return;
    } */

    fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          //M.toast({ html: data.error, classes: 'red darken-3' });
        } else {
          localStorage.setItem('jwt', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          dispatch({ type: 'USER', payload: data.user });
          //M.toast({ html: data.message, classes: 'deep-purple lighten-3' });
          // history.push('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
