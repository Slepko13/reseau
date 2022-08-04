import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLength } from '../../../utils/validators/validators';
import { DialogsSubmitType } from '../Dialogs';

let maxLength5 = maxLength(5);
const DialogsForm: React.FC<InjectedFormProps<DialogsSubmitType>> = (props) => {

      return (
            <div className="DialogsForm">
                  <form onSubmit={props.handleSubmit}>
                        <div>
                              <Field component={Textarea}
                                    validate={[required, maxLength5]}
                                    name="newMessageText"
                                    placeholder=" Input your message here"
                              />
                        </div>
                        <div><button
                        >Send Message</button>
                        </div>
                  </form>
            </div>
      );
}

export default reduxForm<DialogsSubmitType>({ form: "newMessage" })(DialogsForm);