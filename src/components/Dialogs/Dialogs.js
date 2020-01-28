import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import './Dialogs.scss';
import DialogsForm from './DialogsForm/DialogsForm';





const Dialogs = (props) => {

      let dialogs = props.dialogsPage.dialogs;
      let messages = props.dialogsPage.messages;
      // let textareaValue = props.dialogsPage.newMessageText;



      let dialogsItems = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
      let messagesItems = messages.map(m => <Message key={m.id} message={m.message} id={m.id} />);

      const sendNewMessage = (data) => {
            props.addNewMessage(data.newMessageText);
      }

      if (!props.isAuth) return <Redirect to='/login' />

      return (
            <div className="Dialogs">
                  <div className="dialogsList">
                        {dialogsItems}

                  </div>
                  <div className="messages">
                        <div>{messagesItems}</div>

                        <DialogsForm {...props} onSubmit={sendNewMessage} />
                  </div>

            </div >
      );
}


export default Dialogs;