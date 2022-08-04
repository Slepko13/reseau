import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { actions } from '../redux/dialogsReducer';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../redux/reduxStore';
import { DialogsPageType } from '../../types/types';


type MapStateToPropsType = {
      dialogsPage: DialogsPageType
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
      return {
            dialogsPage: state.dialogsPage,
      }
}


export default compose<React.ComponentType>(
      connect(mapStateToProps, { addNewMessage: actions.addNewMessage }),
      withAuthRedirect
)(Dialogs)  