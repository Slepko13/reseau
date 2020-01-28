import React from 'react';
import './FormsControls.scss';


export const Textarea = ({ input, meta, ...props }) => {
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


export const Input = ({ input, meta, ...props }) => {
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

