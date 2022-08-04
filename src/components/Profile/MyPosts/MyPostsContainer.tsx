
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import {
      actions
} from '../../redux/profileReducer';
import { AppStateType } from '../../redux/reduxStore';
import { PostType } from '../../../types/types';

type MapStateToPropsType = {
      posts: Array<PostType>
}

type MapDispatchToPropsType = {
      addNewPost: (post: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
      return {
            posts: state.profilePage.posts
      }

}


const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, { addNewPost: actions.addNewPostActionCreator })(MyPosts);

export default MyPostsContainer;