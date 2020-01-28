import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './components/redux/appReducer';

import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Preloader from './components/common/Preloader/Preloader';


class App extends Component {
  componentDidMount () {
    this.props.initializeApp();
    // // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
    // //       { withCredentials: true })

    // authAPI.getAuthData()
    //       .then(data => {

    //             if (data.resultCode === 0) {
    //                   let { id, email, login } = data.data;
    //                   this.props.setAuthData(id, email, login);
    //             }

    //       })
  }

  render () {
    {
      if (!this.props.initialized)
        return (<Preloader />)
    }

    return (

      <div className="App">
        <HeaderContainer />
        <NavBarContainer
        //  store={props.store} 
        />


        <div className="App-content">
          <Route path='/profile/:userId?' >
            <ProfileContainer
            // store={props.store}
            // profilePage={props.state.profilePage}
            // dispatch={props.dispatch}
            // addNewPost={props.addNewPost}
            // handleChangeNewPost={props.handleChangeNewPost}


            />
          </Route>
          <Route path='/dialogs' >
            <DialogsContainer
            //  store={props.store}
            // dialogsPage={props.state.dialogsPage}
            // dispatch={props.dispatch}
            // addNewMessage={props.addNewMessage}
            // handleChangeNewMessage={props.handleChangeNewMessage} 
            />
          </Route>

          <Route path='/login' component={LoginContainer} />
          <Route path='/users' component={UsersContainer} />

        </div>

      </div>

    );
  }
}
let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })

)(App);
