import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import './Dialogs.scss';
import DialogsForm from './DialogsForm/DialogsForm';
import { DialogsPageType } from '../../types/types';

export type DialogsSubmitType = {
      newMessageText: string
}

type DialogsPropsType = {
      dialogsPage: DialogsPageType,
      addNewMessage: (message: string) => void
}
const Dialogs: React.FC<DialogsPropsType> = (props) => {

      let dialogs = props.dialogsPage.dialogs;
      let messages = props.dialogsPage.messages;
      let dialogsItems = dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
      let messagesItems = messages.map(m => <Message key={m.id} message={m.message} id={m.id} />);

      const sendNewMessage = (data: DialogsSubmitType) => {
            props.addNewMessage(data.newMessageText);
      }

      return (
            <div className="Dialogs">
                  <div className="dialogsList">
                        {dialogsItems}
                  </div>
                  <div className="messages">
                        <div>{messagesItems}</div>
                        <DialogsForm onSubmit={sendNewMessage} />
                  </div>
            </div >
      );
}

export default Dialogs;