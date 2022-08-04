import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../redux/authReducer';
import { AppStateType } from '../redux/reduxStore';

type mapStateToPropsType = {
      isAuth: boolean,
      login: string | null
}
type mapDispatchToPropsType = {
      logout: () => void
}
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

class HeaderContainer extends Component<HeaderContainerPropsType> {

      render() {
            return (
                  <Header {...this.props} />
            );
      }
}
const mapStateToProps = (state: AppStateType) => {
      return {
            isAuth: state.auth.isAuth,
            login: state.auth.login
      }
}
export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { logout })(HeaderContainer);