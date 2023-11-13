import React from 'react';
import TextInput from './InputFields/TextInput';
import Number from './InputFields/Number';
import Password from './InputFields/Password';
import InputImage from './InputFields/InputImage';
import Gender from './InputFields/Gender';
import Button from '@mui/material/Button';

const Form = () => {
  const handleSubmit = () => {
    console.log('Form submitted!');
  };

  return (
    <div>
      <TextInput />
      <Gender />
      <Number />
      <Password />
      <InputImage />
      <label>
        Check if you agree for all the T&C
        <input type='checkbox'></input> <br />
      </label>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Form;
