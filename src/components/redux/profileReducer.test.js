import profileReducer, { addNewPostActionCreator, deletePost } from "./profileReducer"


// 1.data
let action = addNewPostActionCreator('test post');
let state = {
      posts: [{ id: 0, message: "Last post", like: 15 },
      { id: 1, message: "First post", like: 20 },
      { id: 2, message: "Boom", like: 5 }]
}

it('posts length should be incremented', () => {

      // 2.action 

      let newState = profileReducer(state, action);

      // 3.expects
      expect(newState.posts.length).toBe(4);
})


it('message of new post  should be correct"', () => {

      // 2.action 

      let newState = profileReducer(state, action);

      // 3.expects
      expect(newState.posts[3].message).toBe("Boom");
})

it('posts length should be decremented', () => {

      // 2.action 
      let action = deletePost(0);
      let newState = profileReducer(state, action);

      // 3.expects
      expect(newState.posts.length).toBe(2);
})

it('posts length should not  be incremented with wrong id', () => {

      // 2.action 
      let action = deletePost(1000);
      let newState = profileReducer(state, action);

      // 3.expects
      expect(newState.posts.length).toBe(3);
})