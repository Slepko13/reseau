import { profileAPI, ResponseCodes } from '../../api/api';
import { FormAction, stopSubmit } from 'redux-form';
import { PhotosType, PostType, ProfileType } from '../../types/types';
import { BaseThunkType, InferActionsTypes } from './reduxStore';

let initialProfilePage = {
      posts: [
            { id: 0, message: "Last post", like: 15 },
            { id: 1, message: "First post", like: 20 },
            { id: 2, message: "Boom", like: 5 }
      ] as Array<PostType>,
      profile: null as ProfileType | null,
      status: ''
}
export type InitialProfilePageType = typeof initialProfilePage;

const profileReducer = (profilePage: InitialProfilePageType = initialProfilePage, action: ActionsTypes): InitialProfilePageType => {
      switch (action.type) {
            case 'SN/PF/ADD-NEW-POST': {
                  let newPost = {
                        id: profilePage.posts.length,
                        message: action.post,
                        like: 0
                  };
                  return {
                        ...profilePage,
                        posts: [newPost, ...profilePage.posts],
                  }
            }
            case 'SN/PF/DELETE-POST': {
                  return {
                        ...profilePage,
                        posts: profilePage.posts.filter(post => post.id !== action.id),
                  }
            }
            case 'SN/PF/SET-PROFILE': {
                  return {
                        ...profilePage,
                        profile: action.profile
                  }
            }
            case 'SN/PF/SET-STATUS': {
                  return {
                        ...profilePage,
                        status: action.status
                  }
            }
            case 'SN/PF/SET-AVATAR': {
                  return {
                        ...profilePage,
                        profile: { ...profilePage.profile, photos: action.photos } as ProfileType
                  }
            }
            default:
                  return profilePage;
      }
}

export const actions = {
      addNewPostActionCreator: (post: string) => ({ type: 'SN/PF/ADD-NEW-POST', post } as const),
      deletePost: (id: number) => ({ type: 'SN/PF/DELETE-POST', id } as const),
      setProfile: (profile: ProfileType) => ({ type: 'SN/PF/SET-PROFILE', profile } as const),
      setUserStatus: (status: string) => ({ type: 'SN/PF/SET-STATUS', status } as const),
      setUserAvatar: (photos: PhotosType) => ({ type: 'SN/PF/SET-AVATAR', photos } as const)


}
type ActionsTypes = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes | FormAction>;

export const getProfileData = (userId: number): ThunkType => async dispatch => {
      profileAPI.getProfileData(userId)
            .then(data => dispatch(actions.setProfile(data)))
}

export const getUserStatus = (userId: number): ThunkType => async dispatch => {
      profileAPI.getUserStatus(userId)
            .then(data => {
                  dispatch(actions.setUserStatus(data));
            });
}
export const updateUserStatus = (status: string): ThunkType => async dispatch => {
      profileAPI.updateUserStatus(status)
            .then(data => {
                  if (data.resultCode === ResponseCodes.Success) {
                        dispatch(actions.setUserStatus(status));
                  }
            });
}

export const uploadAvatar = (file: File): ThunkType => async dispatch => {
      let data = await profileAPI.updateUserAvatar(file);
      if (data.resultCode === ResponseCodes.Success) {
            dispatch(actions.setUserAvatar(data.data.photos));
      }

}

export const changeProfileData = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
      let userId = getState().auth.userId;
      let data = await profileAPI.changeProfileData(profile);
      if (data.resultCode === ResponseCodes.Success) {
            if (userId !== null) {
                  dispatch(getProfileData(userId));
            } else {
                  throw new Error("userId can't be null");
            }
      } else {
            dispatch(stopSubmit("profileData", { _error: data.messages[0] }));
            return Promise.reject(data.messages[0]);
      }
}




export default profileReducer;