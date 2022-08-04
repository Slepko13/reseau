import React, { useState, useEffect, ChangeEvent } from 'react';

type ProfileStatusWithHooksType = {
      isOwner: boolean
      status: string,
      updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusWithHooksType> = (props) => {

      let [editMode, setEditMode] = useState(false);
      let [status, setStatus] = useState<string>(props.status);

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

      const handleChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
            setStatus(event.target.value);
      };

      return (
            <div className="ProfileStatus">
                  {props.isOwner ? <div>Status : {props.status || "No Status"}</div> :
                        !editMode ? <div onDoubleClick={activateEditMode}>Status:
                              {props.status || "No Status"}
                              <div>(change your status with double click)</div>
                        </div> : undefined
                  }
                  {editMode && <input autoFocus={true}
                        onBlur={deactivateEditMode}
                        onChange={handleChangeStatus} value={status} />}
            </div>
      );
}
export default ProfileStatusWithHooks;