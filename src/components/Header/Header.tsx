import React from 'react';

import './Header.scss';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
      isAuth: boolean,
      login: string | null,
      logout: () => void
}
const Header: React.FC<HeaderPropsType> = (props) => {
      return (
            <div className="Header">
                  <div className="logo"> <img src={logo} alt="logo" className="logo" /></div>
                  <div className="content">Header</div>
                  {props.isAuth ?
                        <div>{props.login} <button onClick={props.logout}>Log Out</button></div> :
                        <NavLink to={'/login'}></NavLink>}
            </div>
      );
}


export default Header;