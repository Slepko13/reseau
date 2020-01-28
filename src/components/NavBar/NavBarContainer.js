import { connect } from 'react-redux';
import NavBar from './NavBar';



let mapStateToProps = (state) => {
      return {
            friends: state.sidebarPage.friends


      }

}

let mapDispatchToProps = (dispatch) => {
      return {}

}
const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;