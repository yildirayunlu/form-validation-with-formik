import React from 'react';

import FormLayout from './FormLayout';
import Input from './Input';

const TextField = (props) => {
  const {label, error, ...otherProps} = props;
  return (
    <FormLayout label={label} error={error}>
      <Input inValid={!!error} {...otherProps} />
    </FormLayout>
  );
};

export default TextField;