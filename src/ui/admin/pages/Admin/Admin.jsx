import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Admin.scss';

export default function Admin({ setAuth }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const admin = {login: 'admin', password: 'admin'};

  const check = (event, login , password) => {
    event.preventDefault();

    if (admin.login === login && admin.password === password) {
      setAuth(true);
    }
  }

  return (
    <div>
      <p className='admin_title'>Admin page</p>
      <form action="/admin" name='login' onSubmit={(event) => check(event, login, password)}>
        <input type="text" name='login' value={login} onChange={(event) => setLogin(event.target.value)} required/>
        <input type="password" name='password' value={password} onChange={(event) => setPassword(event.target.value)} required/>
        <input type="submit" value="Log in"/>
      </form>
    </div>
  );
}

Admin.propTypes = {
  setAuth: PropTypes.func
};
