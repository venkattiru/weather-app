import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

const Input = props => {
  const [inputVal, setInputVal] = useState('');
  const handleText = e => {
    setInputVal(e.target.value);
    props.onInput(e.target.value);
    e.preventDefault();
  };
  useEffect(() => {
    setInputVal('');
    console.log('input');
  }, [props.label]);
  return (
    <TextField
      id="input-field"
      label={props.label}
      onChange={handleText}
      value={inputVal}
    />
  );
};
export default Input;
