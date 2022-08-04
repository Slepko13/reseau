import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { ProfileType } from '../../../../types/types';
import { Input, Textarea } from '../../../common/FormsControls/FormsControls';

type ProfileDataFormSubmitValuesType = ProfileType
type ProfileDataFormPropsType = {
      profile: ProfileType
}

const MyProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormSubmitValuesType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({ handleSubmit, profile, error }) => {
      return (
            <div className="ProfileDataForm">
                  <form onSubmit={handleSubmit}>
                        <div className="ProfileData">
                              <div><button >Save</button></div>
                              <div>My name:
                                    <div><Field
                                          name={"fullName"}
                                          placeholder={"full name"}
                                          type="text"
                                          component={Input}
                                    /></div> </div>
                              <div>Looking for a job :
                                    <div><Field
                                          name={"lookingForAJob"}
                                          type="checkbox"
                                          component={Input}
                                    /></div></div>
                              <div>My professional skills :
                                    <div><Field
                                          name={"lookingForAJobDescription"}
                                          placeholder={"my skills"}
                                          type="text"
                                          component={Textarea}
                                    /></div></div>
                              <div>About me:
                                    <div><Field
                                          name={"aboutMe"}
                                          placeholder={"about me"}
                                          type="text"
                                          component={Textarea}
                                    /></div>
                              </div>
                              <div style={{ color: "red", fontWeight: 'bold' }}>{error}</div>
                              <div className="wrapContacts">Contacts :
                                    {Object.keys(profile.contacts).map(key => {
                                          return <div key={key}>
                                                <div>{key}</div>
                                                <Field
                                                      name={"contacts." + [key]}
                                                      placeholder={[key]}
                                                      type="text"
                                                      component={Input}
                                                />
                                          </div>
                                    })}
                              </div>
                        </div>
                  </form>
            </div>
      )
}
const ProfileDataForm = reduxForm<ProfileDataFormSubmitValuesType, ProfileDataFormPropsType>({ form: 'profileData' })(MyProfileDataForm)
export default ProfileDataForm;