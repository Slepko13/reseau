import React from 'react';
import { NavLink } from 'react-router-dom';

import './DialogItem.scss';

const DialogItem = (props) => {
      return (
            <div className="DialogItem">
                  <NavLink to={'/dialogs/' + props.id}>  {props.name}</NavLink>

            </div>
      )
}
export default DialogItem;