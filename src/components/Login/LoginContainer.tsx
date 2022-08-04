import { connect } from 'react-redux';
import { login } from '../redux/authReducer';
import { AppStateType } from '../redux/reduxStore';

import Login from './Login';

type mapStateToPropsType = {
      isAuth: boolean
}
type mapDispatchToPropsType = {
      login: (email: string, password: string, rememberMe: boolean) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
      return {
            isAuth: state.auth.isAuth
      }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { login })(Login);