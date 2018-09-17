import EO_Form from './EO_form';
import CV_Form from './CV_form';
import CY_Form from './CY_form';
import DO_Form from './DO_form';
import GL_Form from './GL_form';
import WC_Form from './WC_form';
import BOP_Form from './BOP_form';
import React from 'react';

const required = value => (value ? undefined : 'Required');

export default title => {
  switch (title) {
    case 'Errors and Omission':
      return <EO_Form required={required} />;
    case 'Commercial Vehicle':
      return <CV_Form required={required} />;
    case 'Cyber Liability':
      return <CY_Form required={required} />;
    case 'Directors and Officer':
      return <DO_Form required={required} />;
    case 'General Liability':
      return <GL_Form  required={required} />;
    case 'Workers Compensation':
      return <WC_Form required={required} />;
    case 'Business Owners Policy':
      return <BOP_Form required={required} />;
  }
};
