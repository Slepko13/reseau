import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required, maxLength } from '../../../utils/validators/validators';

let maxLength30 = maxLength(30);
// let LoginForm = (props) => {
let LoginForm = ({ handleSubmit, error }) => {


      return (
            <div className="LoginForm">
                  {/* <form onSubmit={props.handleSubmit}> */}
                  <form onSubmit={handleSubmit}>
                        <div><Field
                              name={"email"}
                              placeholder={"email"}
                              type="email"
                              component={Input}
                              validate={[required, maxLength30]}

                        /></div>
                        <div><Field
                              name={"password"}
                              placeholder={"password"}
                              type={"password"}
                              component={Input}
                              validate={[required, maxLength30]}
                        /></div>
                        <div><Field
                              name={"rememberMe"}
                              type={"checkbox"}
                              component={Input}
                        />remember me</div>
                        {/* <div style={{ color: "red", fontWeight: 'bold' }}>{props.error}</div> */}
                        <div style={{ color: "red", fontWeight: 'bold' }}>{error}</div>
                        <div><button>Login</button></div>
                  </form>
            </div>
      );
}
LoginForm = reduxForm({ form: 'login' })(LoginForm)
export default LoginForm