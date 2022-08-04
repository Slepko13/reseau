import React from 'react';
import { NavLink } from 'react-router-dom';

import './DialogItem.scss';

type DialogItemPropsType = {
      id: number,
      name: string
}
const DialogItem: React.FC<DialogItemPropsType> = (props) => {
      return (
            <div className="DialogItem">
                  <NavLink to={'/dialogs/' + props.id}>  {props.name}</NavLink>
            </div>
      )
}
export default DialogItem;