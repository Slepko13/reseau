import React from 'react';
import ProfileInfo, { ProfileInfoPropsType } from './ProfileInfo/ProfileInfo';
import './Profile.scss'
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfilePropsType = ProfileInfoPropsType

const Profile: React.FC<ProfilePropsType> = (props) => {

      return (
            <div className="Profile">
                  <ProfileInfo {...props} />
                  <MyPostsContainer
                  />
            </div>
      );
}

export default Profile;