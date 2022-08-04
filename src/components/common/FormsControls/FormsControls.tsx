import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import './FormsControls.scss';

export const Textarea: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
      let hasError = meta.error && meta.touched;
      return (
            <div className="FormsControls">
                  <div className={(hasError) ? "error" : "valid"}  >
                        <textarea {...input} {...props} />
                  </div>
                  {(hasError) ? <div className="errorText">{meta.error}</div> : undefined}
            </div>
      );
}


export const Input: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
      let hasError = meta.error && meta.touched;
      return (
            <div className="FormsControls">
                  <div className={(hasError) ? "error" : "valid"}  >
                        <input {...input} {...props} />
                  </div>
                  {(hasError) ? <div className="errorText">{meta.error}</div> : undefined}
            </div>
      );
}

