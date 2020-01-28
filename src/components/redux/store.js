import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";




let store = {


      _state: {
            profilePage: {
                  posts: [{ id: 0, message: "First message", like: 15 },
                  { id: 1, message: "Second message", like: 20 },
                  { id: 2, message: "Boom", like: 5 }],
                  newPostText: ''

            },
            dialogsPage: {
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
                  newMessageText: ''


            },

            sidebarPage: {
                  friends: [
                        { id: 0, name: "Olena", avatar: "" },
                        { id: 1, name: "Andriy", avatar: "" },
                        { id: 2, name: "Mir", avatar: "" }
                  ]

            }
      },



      _localRerenderEntireTree () {
            console.log('buchon');
      },

      getState () {

            return this._state;

      },

      subscribe (observer) {
            this._localRerenderEntireTree = observer;
      },

      dispatch (action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
            this._localRerenderEntireTree(this._state);


      },


}




export default store;