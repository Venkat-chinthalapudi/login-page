import React from 'react';
import '../Comp log/log.css';

function Login() {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=360" alt="Login Image" />
      </div>
      <div className="login-form-container">
        <h2>Login</h2>
        <form>
        <div className="input-group">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Enter username" />
  </div>
  <div className="input-group">
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" placeholder="Enter password" />
  </div>
          <button className='submit' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
