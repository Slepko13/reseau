import React, { Component } from 'react';
import './Navbar.scss'
class NavBar extends Component {
      state = {}
      render () {
            return (
                  <div className="NavBar">
                        <div>Profiles</div>
                        <div>Messages</div>
                        <div>News</div>
                        <div>Music</div>
                        <div>settings</div>
                  </div>
            );
      }
}

export default NavBar;