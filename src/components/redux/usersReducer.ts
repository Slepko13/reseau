import { usersAPI, followAPI, ResponseCodes } from '../../api/api';
import { UserType } from '../../types/types';
import { BaseThunkType, InferActionsTypes } from './reduxStore';


const initialUsersPage = {
      users: [] as Array<UserType>,
      pageSize: 10,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: false,
      isFollowingInProgress: [] as number[]
}

export type UsersReducerType = typeof initialUsersPage

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
      follow: (userID: number) => ({ type: 'FOLLOW', id: userID } as const),
      unFollow: (userID: number) => ({ type: 'UNFOLLOW', id: userID } as const),
      setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
      setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
      setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
      toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
      toggleFollowingInProgress: (booleanFollowingProgress: boolean, id: number) => ({ type: 'TOGGLE_FOLLOWING_PROGRESS', booleanFollowingProgress, id } as const),
}

export const usersReducer = (usersPage = initialUsersPage, action: ActionsTypes): UsersReducerType => {
      switch (action.type) {
            case 'FOLLOW':
                  return {
                        ...usersPage,
                        users: usersPage.users.map(u => {
                              if (u.id === action.id) {
                                    return { ...u, followed: true }
                              }
                              return u;
                        })
                  }
            case 'UNFOLLOW':
                  return {
                        ...usersPage,
                        users: usersPage.users.map(u => {
                              if (u.id === action.id) {
                                    return { ...u, followed: false }
                              }
                              return u;
                        })
                  }
            case 'SET_USERS':
                  return { ...usersPage, users: action.users }
            case 'SET_CURRENT_PAGE':
                  return { ...usersPage, currentPage: action.currentPage }
            case 'SET_TOTAL_USERS_COUNT':
                  return { ...usersPage, totalUsersCount: action.totalUsersCount }
            case 'TOGGLE_IS_FETCHING':
                  return { ...usersPage, isFetching: action.isFetching }
            case 'TOGGLE_FOLLOWING_PROGRESS':
                  return {
                        ...usersPage,
                        isFollowingInProgress: action.booleanFollowingProgress ?
                              [...usersPage.isFollowingInProgress, action.id] :
                              usersPage.isFollowingInProgress.filter(id => id !== action.id)
                  }
            default:
                  return usersPage;
      }
}

type ThunkType = BaseThunkType<ActionsTypes>

export const getUsers = (currentPage: number,
      pageSize: number): ThunkType => async dispatch => {
            dispatch(actions.setCurrentPage(currentPage));
            dispatch(actions.toggleIsFetching(true));

            usersAPI.getUsers(currentPage, pageSize).then(data => {
                  dispatch(actions.toggleIsFetching(false));
                  dispatch(actions.setUsers(data.items));
                  dispatch(actions.setTotalUsersCount(data.totalCount));
            }
            )
      }

export const followUser = (userId: number): ThunkType => async dispatch => {
      dispatch(actions.toggleFollowingInProgress(true, userId));
      const data = await followAPI.isFollowed(userId);

      if (data.resultCode === ResponseCodes.Success) {
            dispatch(actions.follow(userId));
      }
      dispatch(actions.toggleFollowingInProgress(false, userId));
      // followAPI.isFollowed(userId).then(data => {
      //       if (data.resultCode === ResponseCodes.Success) {
      //             dispatch(actions.follow(userId));
      //       }
      //       dispatch(actions.toggleFollowingInProgress(false, userId));
      // })
}


export const unFollowUser = (userId: number): ThunkType => async dispatch => {
      dispatch(actions.toggleFollowingInProgress(true, userId));
      const data = await followAPI.isUnFollowed(userId);

      if (data.resultCode === ResponseCodes.Success) {
            dispatch(actions.unFollow(userId));
      }
      dispatch(actions.toggleFollowingInProgress(false, userId));
      // followAPI.isUnFollowed(userId).then(data => {
      //       if (data.resultCode === ResponseCodes.Success) {
      //             dispatch(actions.unFollow(userId));
      //       }
      //       dispatch(actions.toggleFollowingInProgress(false, userId));
      // })
}

export default usersReducer;