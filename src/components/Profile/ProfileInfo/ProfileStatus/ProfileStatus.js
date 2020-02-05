import React, { Component } from 'react';

class ProfileStatus extends Component {

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
            // this.setState({
            //       status : 
            // })
      }

      handleChangeStatus = (event) => {
            this.setState({
                  status: event.target.value
            });

      }

      componentDidUpdate (prevProps, prevState) {
            if (prevProps.status !== this.props.status) {
                  this.setState({
                        status: this.props.status
                  });
            }
      }

      render () {
            console.log(this.state.status)
            return (
                  <div className="ProfileStatus">

                        {!this.state.editMode && <div onDoubleClick={this.activateEditMode}>Status: {this.props.status || "No Status"}
                              <div>(change your status with double click)</div>
                        </div>}

                        {this.state.editMode && <input autoFocus={true}
                              onBlur={this.deactivateEditMode}
                              onChange={this.handleChangeStatus} value={this.state.status} />}
                        {/* <button onClick={this.props.updateUserStatus("New status")}>G</button> */}

                  </div>
            );

      }
}
export default ProfileStatus;