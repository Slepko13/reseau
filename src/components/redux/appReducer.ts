import { ThunkAction } from 'redux-thunk';
import { getAuthData } from './authReducer';
import { AppStateType, InferActionsTypes } from './reduxStore';

let initialState = {
      initialized: false
}
export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;

let appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
      switch (action.type) {
            case 'SN/APP/INITIALIZED-SUCCESS': {
                  return {
                        ...state,
                        initialized: true,
                  }
            }
            default:
                  return state;
      }
}

export const actions = {
      initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED-SUCCESS' } as const)
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => dispatch => {
      dispatch(getAuthData())
            .then(() => {
                  dispatch(actions.initializedSuccess());
            })
}

export default appReducer;