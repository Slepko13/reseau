import { connect } from 'react-redux';
import { FriendType } from '../../types/types';
import { AppStateType } from '../redux/reduxStore';
import NavBar from './NavBar';

type mapStateToPropsType = {
      friends: Array<FriendType>
}

let mapStateToProps = (state: AppStateType) => {
      return {
            friends: state.sidebarPage.friends
      }
}

const NavBarContainer = connect<mapStateToPropsType, {}, {}, AppStateType>(mapStateToProps, {})(NavBar);

export default NavBarContainer;