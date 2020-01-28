
import { getAuthData } from './authReducer';


let INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';



let initialApp = {
      initialized: false


}

let appReducer = (app = initialApp, action) => {


      switch (action.type) {

            case INITIALIZED_SUCCESS: {
                  return {
                        ...app,
                        initialized: true

                  }
            }
            default:
                  return app;
      }

}


export const initializedSuccess = () => {
      return {
            type: INITIALIZED_SUCCESS

      }
}
export const initializeApp = () => (dispatch) => {
      dispatch(getAuthData())
            .then(() => {
                  dispatch(initializedSuccess());
            })


}
// export const getAuthData = () => {
//       return (dispatch) => {
//             // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
//             //       { withCredentials: true })

//             authAPI.getAuthData()
//                   .then(data => {
//                         console.log(data);

//                         if (data.resultCode === 0) {
//                               let { id, email, login } = data.data;
//                               dispatch(setAuthData(id, email, login, true));

//                         }

//                   })
//       }
// }





export default appReducer;