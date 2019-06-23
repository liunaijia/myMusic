import React from 'react';
import { node, instanceOf, func } from 'prop-types';

function Form({ value, onChange, children }) {
  function handleChange(name) {
    return (event) => {
      if (onChange) {
        onChange({
          target: {
            value: {
              ...value,
              [name]: event.target.value,
            },
          },
        });
      }
    };
  }

  return React.Children.map(children, (child) => {
    const { name } = child.props;
    return React.cloneElement(child, {
      value: value[name],
      onChange: handleChange(name),
    });
  });
}

Form.propTypes = {
  children: node,
  value: instanceOf(Object),
  onChange: func,
};

Form.defaultProps = {
  children: null,
  value: {},
  onChange: null,
};

export default Form;
