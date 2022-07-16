import React from 'react';

const Login = () => {
  return (
    <>
      <div className="login-panel-container">
        <img className="login-image" src="../images/user.png" />
        <div className="login-form-container">
          <form className="form">
            <input
              className="text-input"
              type={'email'}
              placeholder={'emp000@lestoproduct.com'}
            />
            <input
              className="text-input last-input"
              type={'password'}
              placeholder={'******'}
            />
            <button className="big-button">Вход</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
