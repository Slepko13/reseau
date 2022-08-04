import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
      followUser,
      unFollowUser,
      getUsers
} from '../redux/usersReducer';
import { compose } from 'redux';
import {
      getUsersFromStore,
      getPageSize,
      getTotalUsersCount,
      getCurrentPage,
      getIsFetching,
      getIsFollowingInProgress
} from '../redux/selectors/usersSelector';
import { UserType } from '../../types/types';
import { AppStateType } from '../redux/reduxStore';

type UsersContainerOwnPropsType = {
      title: string,
}

type UsersContainerMapStatePropsType = {
      currentPage: number,
      isFetching: boolean,
      isFollowingInProgress: Array<number>,
      pageSize: number,
      users: Array<UserType>,
      totalUsersCount: number,
}

type UsersContainerMapDispatchPropsType = {
      followUser: (userId: number) => void,
      getUsers: (currentPage: number, pageSize: number) => void,
      unFollowUser: (userId: number) => void,
}

type UsersContainerPropsType = UsersContainerOwnPropsType & UsersContainerMapStatePropsType & UsersContainerMapDispatchPropsType;

class UsersContainer extends Component<UsersContainerPropsType> {

      componentDidMount() {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
      }

      onPageChanged = (pageNumber: number) => {
            this.props.getUsers(pageNumber, this.props.pageSize);
      }

      render() {
            return (
                  <>
                        <h1>{this.props.title}</h1>
                        <Users
                              totalUsersCount={this.props.totalUsersCount}
                              pageSize={this.props.pageSize}
                              currentPage={this.props.currentPage}
                              onPageChanged={this.onPageChanged}
                              users={this.props.users}
                              followUser={this.props.followUser}
                              unFollowUser={this.props.unFollowUser}
                              isFollowingInProgress={this.props.isFollowingInProgress}
                              isFetching={this.props.isFetching}
                        />
                  </>
            );
      }
}

let mapStateToProps = (state: AppStateType): UsersContainerMapStatePropsType => {
      return {
            users: getUsersFromStore(state),
            pageSize: getPageSize(state),
            totalUsersCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            isFollowingInProgress: getIsFollowingInProgress(state)
      }
}

export default compose(

      connect<UsersContainerMapStatePropsType, UsersContainerMapDispatchPropsType, UsersContainerOwnPropsType, AppStateType>(mapStateToProps,
            {
                  followUser,
                  unFollowUser,
                  getUsers
            }),
)(UsersContainer)