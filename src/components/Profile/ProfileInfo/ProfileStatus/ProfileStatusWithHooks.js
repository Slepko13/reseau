import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
      // state = {
      //       editMode: false,
      //       status: this.props.status

      let [editMode, setEditMode] = useState(false);
      let [status, setStatus] = useState(props.status);

      useEffect(
            () => {
                  setStatus(props.status);
            },
            [props.status]
      );
      const activateEditMode = () => {

            setEditMode(true);
      };
      const deactivateEditMode = () => {
            setEditMode(false);
            props.updateUserStatus(status);

      };

      const handleChangeStatus = (event) => {
            setStatus(event.target.value);
      };



      // componentDidUpdate (prevProps, prevState) {
      //       if (prevProps.status !== this.props.status) {
      //             this.setState({
      //                   status: this.props.status
      //             });
      //       }
      // }


      return (
            <div className="ProfileStatus">

                  {!editMode && <div onDoubleClick={activateEditMode}>Status:
            {props.status || "No Status"}
                        <div>(change your status with double click)</div>
                  </div>}

                  {editMode && <input autoFocus={true}
                        onBlur={deactivateEditMode}
                        onChange={handleChangeStatus} value={status} />}


            </div>
      );


}
export default ProfileStatusWithHooks;