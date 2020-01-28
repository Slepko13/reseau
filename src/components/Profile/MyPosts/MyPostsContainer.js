
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import {
      addNewPostActionCreator,
      // handleChangeNewPostActionCreator 
} from '../../redux/profileReducer';

// const MyPostsContainer = (props) => {


//       let posts = props.store.getState().profilePage.posts;

//       let textareaValue = props.store.getState().profilePage.newPostText;
//       // let dispatch =  props.dispatch ;

//       let addNewPost = () => {
//             props.store.dispatch(addNewPostActionCreator())
//       }

//       let handleChangeNewPost = (event) => {

//             props.store.dispatch(handleChangeNewPostActionCreator(event.target.value))
//       }

//       return (


//             <MyPosts
//                   posts={posts}
//                   addNewPost={addNewPost}
//                   handleChangeNewPost={handleChangeNewPost}
//                   textareaValue={textareaValue}
//             />
//       );
// }


let mapStateToProps = (state) => {
      return {
            profilePage: state.profilePage
            // posts: state.profilePage.posts,
            // textareaValue: state.profilePage.newPostText

      }

}

let mapDispatchToProps = (dispatch) => {
      return {

            addNewPost: (post) => {
                  dispatch(addNewPostActionCreator(post))
            },

            // handleChangeNewPost: (event) => {
            //       dispatch(handleChangeNewPostActionCreator(event.target.value))
            // }

      }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;