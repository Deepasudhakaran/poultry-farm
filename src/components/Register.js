import React from 'react';

const Register = () => {
  return (
    <div>
        <div className='login-page '>
        <div className='login'>
            <div className='form'>
      <form>
        <h2>Login</h2>
        <label>Email:</label>
        <input type='email' name='email' placeholder='enter the email'/>
        <label>Password:</label>
        <input type='text' name='password' placeholder='enter the password'/>
        <label>Role:
        <select>
            <option>admin</option>
            <option>user</option>
        </select>
        </label>
        <button>Register</button>
      </form>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
