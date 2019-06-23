import { useState } from 'react';

function useForm(initialValue) {
  const [state, setState] = useState(initialValue);

  function handleChange(event) {
    setState(event.target.value);
  }

  return [
    state,
    handleChange,
  ];
}

export default useForm;
