import React from 'react';
import { node } from 'prop-types';

function Input({
  label, ...inputProps
}) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    <label>
      {label}
      <input {...inputProps} />
    </label>
  );
}

Input.propTypes = {
  label: node,
};

Input.defaultProps = {
  label: '',
};

export default Input;
