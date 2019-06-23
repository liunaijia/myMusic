import React, { useState } from 'react';
import { node, instanceOf } from 'prop-types';

function Form({ initialValue, children }) {
  const [state, setState] = useState(initialValue);

  function handleChange(name) {
    return (event) => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
  }

  return React.Children.map(children, (child) => {
    const { name } = child.props;
    return React.cloneElement(child, {
      value: state[name],
      onChange: handleChange(name),
    });
  });
}

Form.propTypes = {
  children: node,
  initialValue: instanceOf(Object),
};

Form.defaultProps = {
  children: null,
  initialValue: {},
};

export default Form;
