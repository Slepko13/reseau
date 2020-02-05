import React from 'react';

import './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import { Redirect } from 'react-router';


const Login = (props) => {
      let submit = values => {
            props.login(values.email, values.password, values.rememberMe);
      }

      if (props.isAuth) return <Redirect to="/profile" />
      return (


            <div className="Login">

                  <h1>LOGIN</h1>
                  <LoginForm onSubmit={submit} />
                  <div>For testing use:
                        <div>email : ReactAppTest@ukr.net</div>
                        <div>password : TestPassword</div>
                  </div>

            </div>

      );

}

export default Login
// connect(null, { login })(Login);