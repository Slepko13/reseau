import React, { Component } from 'react';

import './Header.scss';
import logo from './logo.svg';

class Header extends Component {
      state = {}
      render () {
            return (
                  <div className="Header">
                        <div className="logo"> <img src={logo} alt="logo" className="logo" /></div>

                        <div className="content">Header</div>

                  </div>
            );
      }
}

export default Header;