import { authAPI } from '../../api/api';
import { stopSubmit } from 'redux-form';

let SET_AUTH_DATA = 'SET-AUTH-DATA';



let initialAuth = {

      userId: null,
      email: null,
      login: null,
      isAuth: false


}

let authReducer = (auth = initialAuth, action) => {


      switch (action.type) {

            case SET_AUTH_DATA: {
                  return {
                        ...auth,
                        ...action.payload

                  }
            }
            default:
                  return auth;
      }

}


export const setAuthData = (userId, email, login, isAuth) => {
      return {
            type: SET_AUTH_DATA,
            payload: { userId, email, login, isAuth },
            // isAuth: true
      };
}

export const getAuthData = () => {
      return (dispatch) => {
            // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            //       { withCredentials: true })

            return authAPI.getAuthData()
                  .then(data => {
                        console.log(data);

                        if (data.resultCode === 0) {
                              let { id, email, login } = data.data;
                              dispatch(setAuthData(id, email, login, true));

                        }

                  })
      }
}

export const login = (email, password, rememberMe) => {
      return async (dispatch) => {
            let data = await authAPI.login(email, password, rememberMe);

            if (data.resultCode === 0) {
                  // let { id, email, login } = data.data;
                  dispatch(getAuthData());

            } else {
                  let message = data.messages.length > 0 ? data.messages[0] : "some error"
                  dispatch(stopSubmit('login', { _error: message }))
            }



      }
}

export const logout = () => {
      return async (dispatch) => {
            let data = await authAPI.logout();

            if (data.resultCode === 0) {
                  dispatch(setAuthData(null, null, null, false));
            }


      }
}
export default authReducer;