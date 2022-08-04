import React from 'react';
import { required, maxLength } from '../../../../../utils/validators/validators'
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { Textarea } from '../../../../common/FormsControls/FormsControls';

export type PostSubmitValuesType = {
      newPostText: string
};

type OwnPropsType = {

}
let maxLength10 = maxLength(10);
const MyPostForm: React.FC<InjectedFormProps<PostSubmitValuesType, OwnPropsType> & OwnPropsType> = (props) => {
      return (
            <div className="PostForm">
                  <form onSubmit={props.handleSubmit}>
                        <Field
                              validate={[required, maxLength10]}
                              component={Textarea}
                              name="newPostText"
                              placeholder="Input new post"
                        />
                        <div>
                              <button
                              >Add Post</button>
                        </div>
                  </form>
            </div>
      );
}
const PostForm = reduxForm<PostSubmitValuesType, OwnPropsType>({ form: "newPost" })(MyPostForm)
export default PostForm;