import { BaseThunkType, InferActionsTypes } from './reduxStore';
import { authAPI, ResponseCodes } from '../../api/api';
import { stopSubmit, FormAction } from 'redux-form';

let initialState = {
      userId: null as null | number,
      email: null as null | string,
      login: null as null | string,
      isAuth: false
}

export type InitialAuthType = typeof initialState;

let authReducer = (state = initialState, action: ActionsTypes): InitialAuthType => {
      switch (action.type) {
            case 'SN/AUTH/SET-AUTH-DATA': {
                  return {
                        ...state,
                        ...action.payload
                  }
            }
            default:
                  return state;
      }
}

export const actions = {
      setAuthData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
            type: 'SN/AUTH/SET-AUTH-DATA', payload: { userId, email, login, isAuth },
      } as const)
}
type ActionsTypes = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsTypes | FormAction>

export const getAuthData = (): ThunkType => async dispatch => {
      let response = await authAPI.getAuthData();
      if (response.resultCode === ResponseCodes.Success) {
            let { id, email, login } = response.data;
            dispatch(actions.setAuthData(id, email, login, true));
      }
}


export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async dispatch => {
      let data = await authAPI.login(email, password, rememberMe);
      if (data.resultCode === ResponseCodes.Success) {
            dispatch(getAuthData());
      } else {
            let message = data.messages.length > 0 ? data.messages[0] : "some error"
            dispatch(stopSubmit('login', { _error: message }))
      }
}


export const logout = (): ThunkType => async dispatch => {
      let data = await authAPI.logout();
      if (data.resultCode === ResponseCodes.Success) {
            dispatch(actions.setAuthData(null, null, null, false));
      }
}

export default authReducer;