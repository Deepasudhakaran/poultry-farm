import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <div className='login-page '>
        <div className='login'>
            <div className='form'>
      <form>
        <h2>Login</h2><br/>
        <label>Email</label>
        <input type='email' name='email' placeholder='enter the email'/>
        <label>Password</label>
        <input type='text' name='password' placeholder='enter the password'/>
        <button>Login</button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
