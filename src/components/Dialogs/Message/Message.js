import React from 'react';

import './Message.scss';



const Message = (props) => {
      return (
            <div className="Message">{props.message}</div>
      )
}

export default Message;