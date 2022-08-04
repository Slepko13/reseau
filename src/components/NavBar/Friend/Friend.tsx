import React from 'react';

import './Friend.scss'
type FriendPropsType = {
      name: string
}
const Friend: React.FC<FriendPropsType> = (props) => {
      return (
            <div className="Friend">
                  <div className="avatar">
                        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JahirWxkaX6Q9jN_RXECPyd5cB_oUMjgis0ulNmaOKZL3nC1XA&s" alt="ava" />
                  </div>
                  <div className="friendName">{props.name}</div>
            </div>
      );
}

export default Friend;