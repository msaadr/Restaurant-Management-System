import React, { useState, useEffect } from 'react';
import '../CSS/LoginSignup.css';

const SignUp = () => {
  const [upperHeading, setUpperHeading] = useState('Login Form');
  const [state, setState] = useState(true);
  const [transition, setTransition] = useState(true); 

  const setButtonForSignUp = () => {
    setUpperHeading('Signup Form');
    setState(false);
  };

  const setButtonForLogin = () => {
    setUpperHeading('Login Form');
    setState(true);
  };

  useEffect(() => {
    setTransition(false);
    setTimeout(() => {
      setTransition(true); 
    }, 400); 
  }, [upperHeading]);

  return (
    <div className='main-log-sig'>
      <div className="login-signUp">
        <h2 style={{ textAlign: 'center' }}>{upperHeading}</h2>
        <hr style={{ marginBottom: '20px' }} />
        <div className="log-sig-but">
          <button className={`${state ? 'buttt' : ''}`} onClick={setButtonForLogin}>Login</button>
          <button className={`${!state ? 'buttt' : ''}`} onClick={setButtonForSignUp}>Sign Up</button>
        </div>

        {upperHeading === 'Login Form' ? (
          <div
            className={`main-log-sig-container log ${transition ? 'show' : 'hide'}`}
          >
            <form className="form-log-sig" action="">
              <input type="email" name="email" id="email" placeholder='Email Address' />
              <input type="password" name="password" id="password" placeholder='Password' />
              <div>
                <span>Not a member?</span>
                <span style={{ cursor: 'pointer', color: 'blue' }} onClick={setButtonForSignUp}>Signup now</span>
              </div>
              <button className='log-sig-buut'>Login</button>
            </form>
          </div>

        ) : (
          <div
            className={`main-log-sig-container sig ${transition ? 'show' : 'hide'}`}
          >
            <form className="form-log-sig" action="">
              <input type="text" name="FullName" id="FullName" placeholder='Full name' />
              <input type="text" name="userName" id="userName" placeholder='User name' />
              <input type="email" name="email" id="email" placeholder='Email Address' />
              <input type="password" name="password" id="password" placeholder='Password' />
              <button className='log-sig-buut'>Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
