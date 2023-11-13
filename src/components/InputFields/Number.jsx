import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Number = () => {
  const [num, setNum] = useState('');

  const handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div>
      <TextField
        type='number'
        label='Age'
        value={num}
        onChange={handleChange}
        inputProps={{ min: '17', max: '50' }}
        fullWidth
      />
      <br />
      <TextField type='tel' label='Contact Number' fullWidth />
    </div>
  );
};

export default Number;
