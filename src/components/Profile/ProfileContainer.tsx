import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
      getProfileData,
      getUserStatus,
      updateUserStatus,
      uploadAvatar,
      changeProfileData
} from '../redux/profileReducer';
import Profile from './Profile';
import { AppStateType } from '../redux/reduxStore';
import { ProfileType } from '../../types/types';

type MapStateToPropsType = ReturnType<typeof mapStateToProps>
type MapDispatchToPropsType = {
      getProfileData: (userId: number) => void
      getUserStatus: (userId: number) => void
      updateUserStatus: (status: string) => void,
      uploadAvatar: (file: File) => void,
      changeProfileData: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
      userId: string,

}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends Component<ProfileContainerPropsType> {

      refreshProfileInfo() {
            let userId: number | null = +this.props.match.params.userId;
            if (!userId) {
                  userId = this.props.authorizedId;
                  if (!userId) {
                        this.props.history.push('/login');
                  }
            }
            if (!userId) {
                  console.error("ID should exist")
            } else {
                  this.props.getProfileData(userId);
                  this.props.getUserStatus(userId);
            }
      }

      componentDidMount() {
            this.refreshProfileInfo();
      }

      componentDidUpdate(prevProps: ProfileContainerPropsType) {
            if (this.props.match.params.userId !== prevProps.match.params.userId) {
                  this.refreshProfileInfo();
            }
      }
      render() {
            return (
                  <Profile {...this.props} isOwner={!this.props.match.params.userId}
                  />
            );
      }
}

const mapStateToProps = (state: AppStateType) => {
      return {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedId: state.auth.userId,
            isAuth: state.auth.isAuth
      }
}

export default compose<React.ComponentType>(
      connect(mapStateToProps, { getProfileData, getUserStatus, updateUserStatus, uploadAvatar, changeProfileData }),
      withRouter,
)(ProfileContainer)