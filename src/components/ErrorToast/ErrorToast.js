import React from 'react';

import './ErrorToast.css';

const ErrorToast = ({ msg }) => {
  return (
    <div className="error-toast">
      <p><b>{msg}</b></p>
    </div>
  );
};

export default ErrorToast;
