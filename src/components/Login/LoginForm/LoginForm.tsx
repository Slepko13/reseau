import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { Input } from '../../common/FormsControls/FormsControls';
import { required, maxLength } from '../../../utils/validators/validators';
import { LoginSubmitValuesType } from '../Login';

let maxLength30 = maxLength(30);
const MyLoginForm: React.FC<InjectedFormProps<LoginSubmitValuesType>> = ({ handleSubmit, error }) => {

      return (
            <div className="LoginForm">
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
                        <div style={{ color: "red", fontWeight: 'bold' }}>{error}</div>
                        <div><button>Login</button></div>
                  </form>
            </div>
      );
}
const LoginForm = reduxForm<LoginSubmitValuesType>({ form: 'login' })(MyLoginForm)
export default LoginForm