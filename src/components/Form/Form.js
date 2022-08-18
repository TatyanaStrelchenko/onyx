// import { useState } from 'react';

import './Form.scss';

const Form = () => {
  return (
    <div
      className="pipedriveWebForms form"
      data-pd-webforms="https://webforms.pipedrive.com/f/1DZ91EpLM8mrGVqFgRTh8ewh7HHD7eSmSdYgCi7VXECrozgQgNurFdvzcnPEZkco3"
    >
      <iframe
        src="https://webforms.pipedrive.com/f/1DZ91EpLM8mrGVqFgRTh8ewh7HHD7eSmSdYgCi7VXECrozgQgNurFdvzcnPEZkco3"
        scrolling="no"
        seamless="seamless"
        title="iframe"
        style={{
          border: 'none',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '768px',
          minWidth: '320px',
          height: '100%',
          position: 'relative'
        }}
      />
    </div>
  );
};

export { Form };
