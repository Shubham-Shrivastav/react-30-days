import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Password = ({ onChange }) => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value)
    setPassword(value)

  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,32})$/;

    return !passwordRegex.test(password);
  };

  return (
    <div>
      <TextField
        required
        type='password'
        label='Choose Password'
        value={password}
        onChange={handleChange}
        fullWidth
        error={validatePassword()}
        helperText={
          validatePassword()
            ? 'Password must contain at least 8 characters, one uppercase letter, and one special character.'
            : ''
        }
      />
    </div>
  );
};

export default Password;
