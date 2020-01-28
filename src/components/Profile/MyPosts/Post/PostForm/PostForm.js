import React from 'react';
import { required, maxLength } from '../../../../../utils/validators/validators'

import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../../../common/FormsControls/FormsControls';


let maxLength10 = maxLength(10);
let PostForm = (props) => {
      return (
            <div className="PostForm">
                  <form onSubmit={props.handleSubmit}>
                        <Field
                              validate={[required, maxLength10]}
                              component={Textarea}
                              name="newPostText"
                              placeholder="Input new post"
                        // onChange={props.handleChangeNewPost}
                        // value={props.profilePage.newPostText} 
                        />

                        <div>
                              <button
                              // onClick={props.addNewPost}
                              >Add Post</button>
                        </div>
                  </form>
            </div>
      );
}
PostForm = reduxForm({ form: "newPost" })(PostForm)
export default PostForm;