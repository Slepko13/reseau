import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
// import * as axios from 'axios';
import { usersAPI } from '../../api/api';


import {
      followUser, unFollowUser,
      //  setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
      toggleFollowingInProgress, getUsers
} from '../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';
import {
      getUsersFromStore,
      getPageSize,
      getTotalUsersCount,
      getCurrentPage,
      getIsFetching,
      getIsFollowingInProgress
} from '../redux/selectors/usersSelector';


class UsersContainer extends Component {


      componentDidMount () {

            this.props.getUsers(this.props.currentPage, this.props.pageSize);
            //Replaced by using Thunk getUsers
            // this.props.toggleIsFetching(true);
            // // axios
            // //       .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            // //             {
            // //                   withCredentials: true
            // //             }
            // //       )

            // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

            //       this.props.toggleIsFetching(false);
            //       this.props.setUsers(data.items);
            //       this.props.setTotalUsersCount(data.totalCount);
            // }
            // )
      }

      onPageChanged = (pageNumber) => {

            this.props.getUsers(pageNumber, this.props.pageSize);
            //Replaced by using Thunk getUsers
            // this.props.setCurrentPage(pageNumber);
            // this.props.toggleIsFetching(true);
            // // axios
            // //       .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            // //             {
            // //                   withCredentials: true
            // //             }
            // //       )
            // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            //       this.props.toggleIsFetching(false);
            //       this.props.setUsers(data.items)
            // })
      }


      render () {


            return (

                  <>
                        {this.props.isFetching ? <Preloader /> : <Users

                              // {...this.props}
                              totalUsersCount={this.props.totalUsersCount}
                              pageSize={this.props.pageSize}
                              currentPage={this.props.currentPage}
                              onPageChanged={this.onPageChanged}
                              users={this.props.users}
                              followUser={this.props.followUser}
                              unFollowUser={this.props.unFollowUser}
                              toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                              isFollowingInProgress={this.props.isFollowingInProgress}


                        />}


                  </>
            );
      }
}


let mapStateToProps = (state) => {
      return {
            users: getUsersFromStore(state),
            pageSize: getPageSize(state),
            totalUsersCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            isFollowingInProgress: getIsFollowingInProgress(state)
      }

}
//replaced in connect with shot object version
// let mapDispatchToProps = (dispatch) => {
//       return {

//             follow: (userId) => {
//                   dispatch(addFollowAC(userId))
//             },
//             unFollow: (userId) => {
//                   dispatch(addUnFollowAC(userId))
//             },
//             setUsers: (users) => {
//                   dispatch(setUsersAC(users));
//             },
//             setCurrentPage: (currentPage) => {
//                   dispatch(setCurrentPageAC(currentPage));
//             },
//             setTotalUsersCount: (totalCount) => {
//                   dispatch(setTotalUsersCountAC(totalCount));
//             },
//             toggleIsFetching: (isFetching) => {
//                   dispatch(toggleIsFetchingAC(isFetching));
//             }

//       }
// }


// Replaced with compose
// const AuthRedirectComponent = withAuthRedirect(UsersContainer);//from HOC

// export default connect(mapStateToProps,
//       // mapDispatchToProps
//       {
//             followUser, unFollowUser,
//             // setUsers,setCurrentPage, setTotalUsersCount, toggleIsFetching,
//             toggleFollowingInProgress,
//             getUsers //getUsers is thunkCreator
//       })(AuthRedirectComponent)

export default compose(
      connect(mapStateToProps,

            {
                  followUser, unFollowUser,
                  toggleFollowingInProgress,
                  getUsers //getUsers is result of dispatching of thunkCreator
            }),
      // withAuthRedirect
)
      (UsersContainer)