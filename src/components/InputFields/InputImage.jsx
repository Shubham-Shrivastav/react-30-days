import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const InputImage = () => {
  const [img, setImg] = useState('');

  const handleChange = (e) => {
    setImg(e.target.value);
  };

  return (
    <div>
      <InputLabel htmlFor="input-image">Choose Profile Image</InputLabel>
      <Input
        id="input-image"
        type="file"
        value={img}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" aria-label="upload image" component="span">
            </IconButton>
          </InputAdornment>
        }
        fullWidth
      />
    </div>
  );
};

export default InputImage;
