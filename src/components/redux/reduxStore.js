import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from '../redux/profileReducer';
import dialogsReducer from '../redux/dialogsReducer';
import sidebarReducer from '../redux/sidebarReducer';
import usersReducer from '../redux/usersReducer';
import authReducer from '../redux/authReducer';
import appReducer from '../redux/appReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
      profilePage: profileReducer,
      dialogsPage: dialogsReducer,
      sidebarPage: sidebarReducer,
      usersPage: usersReducer,
      auth: authReducer,
      app: appReducer,
      form: formReducer
}
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;