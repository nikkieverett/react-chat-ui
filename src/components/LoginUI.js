import React from 'react';

import LoginButton from './LoginButton.js';

class LoginUI extends React.Component{
  render() {
    return (
      <div className="login-page-container">
        <h1>I'm the login page</h1>
        <input type="text" placeholder="type username"></input>
        <LoginButton />
      </div>
    );
  }
}

export default LoginUI;
