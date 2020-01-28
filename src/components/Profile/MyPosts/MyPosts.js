import React from 'react';

import Post from './Post/Post';
import './MyPosts.scss';
import PostForm from './Post/PostForm/PostForm';




const MyPosts = (props) => {
      console.log(props);
      let postsItems = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} like={p.like} />)
      const sendNewPost = (data) => {
            props.addNewPost(data.newPostText)
            console.log(data.newPostText);
      }
      // let addNewPost = () => {
      //       props.dispatch(addNewPostActionCreator())
      // }

      // let handleChangeNewPost = (event) => {

      //       props.dispatch(handleChangeNewPostActionCreator(event.target.value))
      // }
      return (
            <div className="MyPosts">
                  <h3>My Post</h3>
                  <PostForm {...props} onSubmit={sendNewPost} />
                  <div className="posts">
                        {postsItems}

                  </div>

            </div>
      );
}


export default MyPosts;