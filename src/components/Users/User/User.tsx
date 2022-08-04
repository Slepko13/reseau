import React from 'react';
import alt from '../../../assets/images/alt.png';
import { NavLink } from 'react-router-dom';
import './User.scss'
import { UserType } from '../../../types/types';

type UserPropsType = {
      followUser: (userId: number) => void,
      isFollowingInProgress: Array<number>,
      unFollowUser: (userId: number) => void,
      user: UserType,
}

const User: React.FC<UserPropsType> = ({ user, ...props }) => {

      return (
            <div className="User">
                  <div>
                        <div>
                              <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : alt} alt="userPhoto" style={{ width: 100 }} />
                              </NavLink>
                        </div>
                        <div>
                              {user.followed ?
                                    <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                          props.unFollowUser(user.id);
                                    }}>UnFollow</button> :
                                    <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                          props.followUser(user.id);
                                    }}>Follow</button>
                              }
                        </div>
                  </div>
                  <div>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                  </div>
                  <div>
                  </div>
            </div>
      );
}

export default User;