
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

import {
      addNewMessageActionCreator,
      //  handleChangeNewMessageActionCreator
} from '../redux/dialogsReducer';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';


// const DialogsContainer = (props) => {
//       // let state = props.store.getState();


//       let addNewMessage = () => {
//             props.store.dispatch(addNewMessageActionCreator())
//       }

//       let handleChangeNewMessage = (event) => {

//             props.store.dispatch(handleChangeNewMessageActionCreator(event.target.value));
//       }



//       return (

//             <Dialogs
//                   // dialogs={dialogs}
//                   // messages={messages}
//                   // textareaValue={textareaValue}
//                   dialogsPage={props.store.getState().dialogsPage}
//                   addNewMessage={addNewMessage}
//                   handleChangeNewMessage={handleChangeNewMessage} />
//       );
// }


let mapStateToProps = (state) => {
      return {
            dialogsPage: state.dialogsPage,


      }

}

let mapDispatchToProps = (dispatch) => {
      return {

            addNewMessage: (message) => {
                  dispatch(addNewMessageActionCreator(message))
            },

            // handleChangeNewMessage: (event) => {
            //       dispatch(handleChangeNewMessageActionCreator(event.target.value));
            // }

      }
}
//Replaced by compose
// const AuthRedirectComponent = withAuthRedirect(Dialogs);//from HOC

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;

export default compose(
      connect(mapStateToProps, mapDispatchToProps),
      withAuthRedirect//Hoc
)(Dialogs)