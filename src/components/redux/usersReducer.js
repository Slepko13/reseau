import { usersAPI, followAPI } from '../../api/api';

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
let TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';


let initialUsersPage = {
      users: [],
      pageSize: 10,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: false,
      isFollowingInProgress: []
}



let usersReducer = (usersPage = initialUsersPage, action) => {


      switch (action.type) {
            case FOLLOW: {
                  return {
                        ...usersPage,
                        users: usersPage.users.map(u => {
                              if (u.id === action.id) {
                                    return { ...u, followed: true }
                              }
                              return u;
                        })

                  }
            }
            case UNFOLLOW:
                  {
                        return {
                              ...usersPage,
                              users: usersPage.users.map(u => {
                                    if (u.id === action.id) {
                                          return { ...u, followed: false }
                                    }
                                    return u;
                              })
                        }
                  }
            case SET_USERS:
                  {
                        return { ...usersPage, users: action.users }
                  }
            case SET_CURRENT_PAGE:
                  {
                        return { ...usersPage, currentPage: action.currentPage }
                  }
            case SET_TOTAL_USERS_COUNT:
                  {
                        return { ...usersPage, totalUsersCount: action.totalUsersCount }
                  }
            case TOGGLE_IS_FETCHING:
                  {
                        return { ...usersPage, isFetching: action.isFetching }
                  }
            case TOGGLE_FOLLOWING_PROGRESS:
                  {
                        return {
                              ...usersPage,
                              isFollowingInProgress: action.booleanFollowingProgress ?
                                    [...usersPage.isFollowingInProgress, action.id] :
                                    usersPage.isFollowingInProgress.filter(id => id !== action.id)
                        }
                  }
            default:
                  return usersPage;

      }

}

export const follow = (userID) => {
      return {
            type: FOLLOW,
            id: userID
      };
}

export const unFollow = (userID) => {
      return {
            type: UNFOLLOW,
            id: userID
      }
}

export const setUsers = (users) => {
      return {
            type: SET_USERS,
            users
      }
}

export const setCurrentPage = (currentPage) => {
      return {
            type: SET_CURRENT_PAGE,
            currentPage
      }
}

export const setTotalUsersCount = (totalUsersCount) => {
      return {
            type: SET_TOTAL_USERS_COUNT,
            totalUsersCount
      }

}
export const toggleIsFetching = (isFetching) => {
      return {
            type: TOGGLE_IS_FETCHING,
            isFetching
      }
}

export const toggleFollowingInProgress = (booleanFollowingProgress, id) => {
      return {
            type: TOGGLE_FOLLOWING_PROGRESS,
            booleanFollowingProgress,
            id
      }
}

export const getUsers = (currentPage, pageSize) => {
      return (dispatch) => {
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetching(true));

            usersAPI.getUsers(currentPage, pageSize).then(data => {
                  dispatch(toggleIsFetching(false));
                  dispatch(setUsers(data.items));
                  dispatch(setTotalUsersCount(data.totalCount));

            }
            )
      }
}
export const followUser = (userId) => {
      return (dispatch) => {
            dispatch(toggleFollowingInProgress(true, userId));

            followAPI.isFollowed(userId).then(data => {
                  // console.log(data);

                  if (data.resultCode === 0) {
                        dispatch(follow(userId));

                  }
                  dispatch(toggleFollowingInProgress(false, userId));

            })
      }
}

export const unFollowUser = (userId) => {
      return (dispatch) => {
            dispatch(toggleFollowingInProgress(true, userId));

            followAPI.isUnFollowed(userId).then(data => {
                  // console.log(data);

                  if (data.resultCode === 0) {
                        dispatch(unFollow(userId));

                  }
                  dispatch(toggleFollowingInProgress(false, userId));

            })
      }
}

export default usersReducer;