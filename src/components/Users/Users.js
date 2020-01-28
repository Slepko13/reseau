import React from 'react';
import './Users.scss';
import alt from '../../assets/images/alt.png';
import { NavLink } from 'react-router-dom';
// import * as axios from 'axios';
import { followAPI } from '../../api/api';



const Users = (props) => {
      console.log(props);

      let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
      let pages = [];

      for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
      }

      return (
            <div className="Users">
                  <div className="pagination">
                        {pages.map(p => {
                              return <div key={p} className={props.currentPage === p ? "selected" : undefined}
                                    onClick={() => { props.onPageChanged(p) }}
                              >{p}</div>
                        })

                        }
                  </div>
                  <div className="wrapper">
                        {props.users.map(user =>
                              <div key={user.id} className="user">
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
                                                            // // axios
                                                            // //       .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                            // //             {
                                                            // //                   withCredentials: true,
                                                            // //                   headers: {
                                                            // //                         "API-KEY": "9034dd37-182a-45b0-a234-f8c88c0c6bd0"
                                                            // //                   }
                                                            // //             }
                                                            // //       )
                                                            // props.toggleFollowingInProgress(true, user.id);

                                                            // followAPI.isUnFollowed(user.id).then(data => {

                                                            //       if (data.resultCode === 0) {
                                                            //             props.unFollow(user.id);
                                                            //       }
                                                            //       props.toggleFollowingInProgress(false, user.id);
                                                            // })
                                                            //       // .finally(() => {
                                                            //       //       props.unFollow(user.id);
                                                            //       //       props.toggleFollowingInProgress(false, user.id);
                                                            //       //       // always executed
                                                            //       // })

                                                            //       ;

                                                      }}>UnFollow</button> :
                                                      <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                                            props.followUser(user.id);
                                                            // // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                                            // //       {
                                                            // //             withCredentials: true,
                                                            // //             headers: {
                                                            // //                   "API-KEY": "9034dd37-182a-45b0-a234-f8c88c0c6bd0"
                                                            // //             }
                                                            // //       }
                                                            // // )

                                                            // props.toggleFollowingInProgress(true, user.id);
                                                            // followAPI.isFollowed(user.id).then(data => {
                                                            //       // console.log(data);

                                                            //       if (data.resultCode === 0) {
                                                            //             props.follow(user.id);
                                                            //       }
                                                            //       props.toggleFollowingInProgress(false, user.id);
                                                            // })
                                                            //       // .finally(() => {
                                                            //       //       props.follow(user.id);
                                                            //       //       props.toggleFollowingInProgress(false, user.id);
                                                            //       //       // always executed
                                                            //       // })
                                                            //       ;

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
                        )}
                  </div>
            </div>
      );
}



export default Users;