import React from 'react';


import ProfileInfo from './ProfileInfo/ProfileInfo';

import './Profile.scss'
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {



      return (
            <div className="Profile">
                  <ProfileInfo {...props} />
                  <MyPostsContainer
                  // store={props.store}
                  //  posts={props.profilePage.posts}
                  //       textareaValue={props.profilePage.newPostText}
                  //       dispatch={props.dispatch}
                  // addNewPost={this.props.addNewPost}
                  // handleChangeNewPost={this.props.handleChangeNewPost}
                  />


            </div>

      );
}


export default Profile;