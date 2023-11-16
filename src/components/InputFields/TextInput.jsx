import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({ onChange }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
    onChange(value);
  };

  const validateText = () => {
    return text.trim() === '';
  };

  return (
    <div>
      <TextField
        label='Name'
        value={text}
        onChange={handleChange}
        fullWidth
        error={validateText()}
        helperText={validateText() ? 'This field is required' : ''}
      />
    </div>
  );
};

export default TextInput;
