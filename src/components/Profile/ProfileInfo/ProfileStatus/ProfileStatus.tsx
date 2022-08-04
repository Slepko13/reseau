import React, { ChangeEvent, Component } from 'react';

type ProfileStatusPropsType = {
      status: string,
      updateUserStatus: (status: string) => void
}

type ProfileStatusStateType = {
      editMode: boolean,
      status: string
}
class ProfileStatus extends Component<ProfileStatusPropsType, ProfileStatusStateType> {

      state = {
            editMode: false,
            status: this.props.status
      }

      activateEditMode = () => {
            this.setState({
                  editMode: true
            })
      }

      deactivateEditMode = () => {
            this.setState({
                  editMode: false
            });
            this.props.updateUserStatus(this.state.status);
      }

      handleChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
            this.setState({
                  status: event.target.value
            });
      }

      componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType) {
            if (prevProps.status !== this.props.status) {
                  this.setState({
                        status: this.props.status
                  });
            }
      }

      render() {
            console.log(this.state.status)
            return (
                  <div className="ProfileStatus">
                        {!this.state.editMode && <div onDoubleClick={this.activateEditMode}>Status: {this.props.status || "No Status"}
                              <div>(change your status with double click)</div>
                        </div>}
                        {this.state.editMode && <input autoFocus={true}
                              onBlur={this.deactivateEditMode}
                              onChange={this.handleChangeStatus} value={this.state.status} />}
                  </div>
            );
      }
}
export default ProfileStatus;