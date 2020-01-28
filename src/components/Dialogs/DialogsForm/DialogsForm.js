import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLength } from '../../../utils/validators/validators';



let maxLength5 = maxLength(5);
const DialogsForm = (props) => {

      return (
            <div className="DialogsForm">
                  <form onSubmit={props.handleSubmit}>
                        <div>
                              <Field component={Textarea}
                                    validate={[required, maxLength5]}
                                    name="newMessageText"
                                    placeholder=" Input your message here"
                              // onChange={props.handleChangeNewMessage}
                              // value={textareaValue} 
                              />
                        </div>
                        <div><button
                        //  onClick={props.addNewMessage}
                        >Send Message</button>
                        </div>

                  </form>
            </div>
      );
}

export default reduxForm({ form: "newMessage" })(DialogsForm);