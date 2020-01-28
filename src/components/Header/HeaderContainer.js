import React, { Component } from 'react';
import Header from './Header';
// import * as axios from 'axios';
import { connect } from 'react-redux';

import {
      // setAuthData,
      // getAuthData,
      logout
} from '../redux/authReducer';
// import { authAPI } from '../../api/api';


class HeaderContainer extends Component {
      state = {}
      // componentDidMount () {
      //       this.props.getAuthData();
      //       // // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
      //       // //       { withCredentials: true })

      //       // authAPI.getAuthData()
      //       //       .then(data => {

      //       //             if (data.resultCode === 0) {
      //       //                   let { id, email, login } = data.data;
      //       //                   this.props.setAuthData(id, email, login);
      //       //             }

      //       //       })
      // }
      render () {
            return (
                  <Header {...this.props} />
            );
      }
}
const mapStateToProps = (state) => {
      return {
            isAuth: state.auth.isAuth,
            login: state.auth.login
      }
}
export default connect(mapStateToProps, { logout })(HeaderContainer);