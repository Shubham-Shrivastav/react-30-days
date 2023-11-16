import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Age = ({ onChange }) => {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setAge(value);
    onChange(value);
  };

  return (
    <div>
      <TextField
        type='number'
        name="Age"
        label='Age'
        value={age}
        onChange={handleChange}
        inputProps={{ min: '17', max: '50' }}
        fullWidth
      />
    </div>
  );
};

export default Age;
