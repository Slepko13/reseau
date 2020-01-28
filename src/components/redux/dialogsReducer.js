let ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
// let HANDLE_CHANGE_NEW_MESSAGE = 'HANDLE-CHANGE-NEW-MESSAGE';

let initialDialogsPage = {

      dialogs: [
            { id: 0, name: "Mykola" },
            { id: 1, name: "Olena" },
            { id: 2, name: "Petro" },
            { id: 3, name: "Monobank" },
            { id: 4, name: "Vodafone" },
            { id: 5, name: "U-Team" }
      ],
      messages: [
            { id: 0, message: "Hello" },
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you." },
            { id: 3, message: "I'm fine. And what about you?" },
            { id: 4, message: "Thanks, I am fine too." }
      ],
      // newMessageText: ''



}

let dialogsReducer = (dialogsPage = initialDialogsPage, action) => {

      // let dialogsPageCopy = { ...dialogsPage };
      switch (action.type) {
            case ADD_NEW_MESSAGE:

                  let newMessage = {
                        id: dialogsPage.messages.length,
                        message: action.message

                  };
                  return {
                        ...dialogsPage,
                        messages: [...dialogsPage.messages, newMessage],
                        // newMessageText: ''
                  }
            // dialogsPageCopy.messages.push(newMessage);
            // dialogsPageCopy.newMessageText = "";
            // return dialogsPageCopy;

            // case HANDLE_CHANGE_NEW_MESSAGE:
            //       return {
            //             ...dialogsPage,
            //             newMessageText: action.text
            //       }
            // dialogsPageCopy.newMessageText = action.text;

            // return dialogsPageCopy;
            default:
                  return dialogsPage;

      }

}

export const addNewMessageActionCreator = (message) => {
      return {
            type: ADD_NEW_MESSAGE,
            message
      };
}

// export const handleChangeNewMessageActionCreator = (text) => {
//       return {
//             type: HANDLE_CHANGE_NEW_MESSAGE,
//             text: text
//       }
// }
export default dialogsReducer;