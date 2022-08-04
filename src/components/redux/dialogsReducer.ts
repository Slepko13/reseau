import { DialogType, MessageType } from "../../types/types";
import { InferActionsTypes } from "./reduxStore";

let initialDialogsPage = {
      dialogs: [
            { id: 0, name: "Mykola" },
            { id: 1, name: "Olena" },
            { id: 2, name: "Petro" },
            { id: 3, name: "Monobank" },
            { id: 4, name: "Vodafone" },
            { id: 5, name: "U-Team" }
      ] as Array<DialogType>,
      messages: [
            { id: 0, message: "Hello" },
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you." },
            { id: 3, message: "I'm fine. And what about you?" },
            { id: 4, message: "Thanks, I am fine too." }
      ] as Array<MessageType>,
}
export type InitialDialogsPageType = typeof initialDialogsPage;

type ActionsTypes = InferActionsTypes<typeof actions>;

let dialogsReducer = (dialogsPage = initialDialogsPage, action: ActionsTypes): InitialDialogsPageType => {

      switch (action.type) {
            case 'SN/DL/ADD-NEW-MESSAGE':
                  let newMessage = {
                        id: dialogsPage.messages.length,
                        message: action.message
                  };
                  return {
                        ...dialogsPage,
                        messages: [...dialogsPage.messages, newMessage],
                  }
            default:
                  return dialogsPage;
      }
}

export const actions = {
      addNewMessage: (message: string) => ({
            type: 'SN/DL/ADD-NEW-MESSAGE', message
      } as const)
}

export default dialogsReducer;