import React from 'react';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import { Redirect } from 'react-router';

export type LoginSubmitValuesType = {
      email: string,
      password: string,
      rememberMe: boolean
}
type LoginPropsType = {
      isAuth: boolean,
      login: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<LoginPropsType> = (props) => {
      const onSubmit = (values: LoginSubmitValuesType) => {
            props.login(values.email, values.password, values.rememberMe);
      }
      if (props.isAuth) return <Redirect to="/profile" />
      return (
            <div className="Login">
                  <h1>LOGIN</h1>
                  <LoginForm onSubmit={onSubmit} />
                  <div>For testing use:
                        <div>email : ReactAppTest@ukr.net</div>
                        <div>password : TestPassword</div>
                  </div>
            </div>
      );
}

export default Login