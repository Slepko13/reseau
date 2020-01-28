import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';
import Friend from './Friend/Friend';

const NavBar = (props) => {
      let friends = props.friends;
      let friendsList = friends.map(f => <Friend key={f.id} name={f.name} />);
      return (
            <div className="NavBar">
                  <div className="items">
                        <div className="item">
                              <NavLink to="/profile" >Profiles</NavLink>
                        </div>

                        <div className="item ">
                              <NavLink to="/dialogs" exact activeStyle={{ color: 'red' }}>Messages</NavLink>
                        </div>
                        <div className="item">
                              <NavLink to="/users">Users</NavLink>
                        </div>



                  </div>

                  <div className="friends">
                        <div className="title">Friends</div>

                        <div className="friendsInfo">
                              {friendsList}
                        </div>

                  </div>

            </div>
      );
}


export default NavBar;