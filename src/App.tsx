import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp, InitialStateType } from './components/redux/appReducer';

import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { AppStateType } from './components/redux/reduxStore';


type MapStateToPropsType = InitialStateType;
type MapDispatchToPropsType = {
  initializeApp: () => void
}

class App extends Component<MapStateToPropsType & MapDispatchToPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    return (
      <div className="App">
        <HeaderContainer />
        <NavBarContainer
        />
        <div className="App-content">
          <Route path='/profile/:userId?' >
            <ProfileContainer
            />
          </Route>
          <Route path='/dialogs' >
            <DialogsContainer
            />
          </Route>
          <Route path='/login' component={LoginContainer} />
          <Route path='/users' >
            <UsersContainer title="Custom Title" />
          </Route>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized
  }
}
export default compose<React.ComponentType>(
  withRouter,
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { initializeApp })

)(App);
