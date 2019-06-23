import React from 'react';
import { node, string } from 'prop-types';

function Input({
  label, value, ...inputProps
}) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    <label>
      {label}
      <input value={value} {...inputProps} />
    </label>
  );
}

Input.propTypes = {
  label: node,
  value: string,
};

Input.defaultProps = {
  label: null,
  value: '',
};

export default Input;
