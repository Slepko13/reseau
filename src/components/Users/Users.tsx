import React from 'react';
import './Users.scss';

import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import { UserType } from '../../types/types';

type UsersPropsType = {
      currentPage: number,
      followUser: (userId: number) => void,
      isFetching: boolean,
      isFollowingInProgress: Array<number>,
      onPageChanged: (pageNumber: number) => void,
      pageSize: number,
      users: Array<UserType>,
      totalUsersCount: number,
      unFollowUser: (userId: number) => void
}
const Users: React.FC<UsersPropsType> = ({
      currentPage,
      totalUsersCount,
      pageSize,
      onPageChanged,
      users,
      ...props }) => {
      return (
            <div className="Users">
                  <Paginator
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        totalItemsCount={totalUsersCount}
                        pageSize={pageSize}
                        portionSize={10}
                  />
                  {props.isFetching ? <Preloader /> :
                        <div className="wrapper">
                              {users.map(user =>
                                    <User
                                          key={user.id}
                                          user={user}
                                          {...props}
                                    />
                              )}
                        </div>}
            </div>
      );
}

export default Users;