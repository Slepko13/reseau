import React from 'react';

import Post from './Post/Post';
import './MyPosts.scss';
import PostForm, { PostSubmitValuesType } from './Post/PostForm/PostForm';
import { PostType, } from '../../../types/types';


type MyPostsPropsType = {
      posts: Array<PostType>,
      addNewPost: (data: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

      let postsItems = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like} />)
      const sendNewPost = (data: PostSubmitValuesType) => {
            props.addNewPost(data.newPostText)
      }
      return (
            <div className="MyPosts">
                  <h3>My Post</h3>
                  <PostForm onSubmit={sendNewPost} />
                  <div className="posts">
                        {postsItems}
                  </div>
            </div>
      );
}


export default MyPosts;