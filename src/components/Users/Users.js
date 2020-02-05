import React from 'react';
import './Users.scss';
import alt from '../../assets/images/alt.png';
import { NavLink } from 'react-router-dom';
// import * as axios from 'axios';
import { followAPI } from '../../api/api';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';




const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {


      return (
            <div className="Users">

                  <Paginator
                        currentPage={currentPage} onPageChanged={onPageChanged}
                        totalItemsCount={totalUsersCount} pageSize={pageSize}
                        portionSize={10}

                  />

                  <div className="wrapper">
                        {users.map(user =>
                              <User key={user.id} {...props} user={user} />

                        )}
                  </div>
            </div>
      );
}



export default Users;