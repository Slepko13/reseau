import { profileAPI } from '../../api/api';

let ADD_NEW_POST = 'ADD-NEW-POST';
let HANDLE_CHANGE_NEW_POST = 'HANDLE-CHANGE-NEW-POST';
let SET_PROFILE = 'SET-PROFILE';
let SET_STATUS = 'SET-STATUS';


let initialProfilePage = {

      posts: [{ id: 0, message: "Last post", like: 15 },
      { id: 1, message: "First post", like: 20 },
      { id: 2, message: "Boom", like: 5 }],
      // newPostText: '',
      profile: null,
      status: ''


}

let profileReducer = (profilePage = initialProfilePage, action) => {
      // let profilePageCopy = {
      //       ...profilePage

      // }

      switch (action.type) {
            case ADD_NEW_POST: {

                  let newPost = {
                        id: profilePage.posts.length,
                        message: action.post,
                        like: 0
                  };
                  return {
                        ...profilePage,
                        posts: [newPost, ...profilePage.posts],
                        // newPostText: ''
                  }
                  // let profilePageCopy = { ...profilePage };
                  // profilePageCopy.posts = [...profilePage.posts];
                  // console.log(profilePageCopy);
                  // console.log(profilePageCopy.posts);


            }
            // case HANDLE_CHANGE_NEW_POST: {

            //       // let profilePageCopy = { ...profilePage };

            //       // profilePageCopy.newPostText = action.text;

            //       // console.log(profilePageCopy.newPostText);

            //       return {
            //             ...profilePage,
            //             newPostText: action.text
            //       }
            // }
            case SET_PROFILE: {
                  return {
                        ...profilePage,
                        profile: action.profile
                  }
            }
            case SET_STATUS: {
                  return {
                        ...profilePage,
                        status: action.status
                  }
            }
            default:
                  return profilePage;
      }

}

export const addNewPostActionCreator = (post) => {
      return {
            type: ADD_NEW_POST,
            post
      };
}

// export const handleChangeNewPostActionCreator = (text) => {
//       return {
//             type: HANDLE_CHANGE_NEW_POST,
//             text: text
//       }
// }
export const setProfile = (profile) => {
      return {
            type: SET_PROFILE,
            profile
      };
}
export const setUserStatus = (status) => {
      return {
            type: SET_STATUS,
            status

      }
}
export const getUserStatus = (userId) => {
      return (dispatch) => {

            profileAPI.getUserStatus(userId)
                  .then(response => {
                        dispatch(setUserStatus(response.data));
                  });
      }
}
export const updateUserStatus = (status) => {
      return (dispatch) => {

            profileAPI.updateUserStatus(status)
                  .then(response => {
                        if (response.data.resultCode === 0) {
                              dispatch(setUserStatus(status));
                        }
                  });
      }
}


export const getProfileData = (userId) => {
      return (dispatch) => {


            // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)

            profileAPI.getProfileData(userId)
                  .then(data => dispatch(setProfile(data)))
      }
}
export default profileReducer;