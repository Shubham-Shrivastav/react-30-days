import React, { useState } from 'react';
import TextInput from './InputFields/TextInput';
import Age from './InputFields/Age';
import Password from './InputFields/Password';
import InputImage from './InputFields/InputImage';
import Gender from './InputFields/Gender';
import Button from '@mui/material/Button';

const Form = () => {
  const [formData, setFormData] = useState({
    text: '',
    age: '',
    password: '',
    image: '',
    gender: '',
    agreement: false,
  });

  const handleTextChange = (value) => {
    setFormData({ ...formData, text: value });
  };

  const handleAgeChange = (value) => {
    setFormData({ ...formData, age: value });
  };

  const handlePasswordChange = (value) => {
    setFormData({ ...formData, password: value });
  };

  const handleImageChange = (value) => {
    setFormData({ ...formData, image: value });
  };

  const handleGenderChange = (value) => {
    setFormData({ ...formData, gender: value });
  };

  const handleAgreementChange = () => {
    setFormData({ ...formData, agreement: !formData.agreement });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
  };

  return (
    <div>
      <TextInput onChange={handleTextChange} />
      <Gender onChange={handleGenderChange} />
      <Age onChange={handleAgeChange} />
      <Password onChange={handlePasswordChange} />
      <InputImage onChange={handleImageChange} />
      <label>
        <input type='checkbox' onChange={handleAgreementChange} />
        Check if you agree for all the T&C

        <br />
      </label>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Form;
