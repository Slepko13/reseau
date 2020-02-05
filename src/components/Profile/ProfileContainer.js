import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { getProfileData, getUserStatus, updateUserStatus } from '../redux/profileReducer';
import Profile from './Profile';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';

// import { profileAPI } from '../../api/api';
// import * as axios from 'axios';

class ProfileContainer extends Component {

      componentDidMount () {

            let userId = this.props.match.params.userId;
            if (!userId) {
                  userId = this.props.authorizedId;
                  if (!userId) {
                        this.props.history.push('/login');
                  }
            }


            this.props.getProfileData(userId);
            this.props.getUserStatus(userId);



            // if (!userId) {
            //       userId = 5696;
            // }
            // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

            // profileAPI.getProfileData(userId)
            //       .then(data => this.props.setProfile(data))

      }
      render () {
            // console.log("is|Auth", this.props.isAuth)
            // if (!this.props.isAuth) return <Redirect to='/login' />

            return (
                  <Profile {...this.props}
                  // profile={this.props.profile} 
                  />
            );
      }
}


const mapStateToProps = (state) => {
      return {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedId: state.auth.userId,
            isAuth: state.auth.isAuth

      }

}
//Replaced by compose
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let NewProfileContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getProfileData })(NewProfileContainer);

export default compose(
      connect(mapStateToProps, { getProfileData, getUserStatus, updateUserStatus }),
      withRouter,
      // withAuthRedirect
)(ProfileContainer)