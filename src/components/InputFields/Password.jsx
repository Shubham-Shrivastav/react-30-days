import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Password = () => {
  const [pass, setPass] = useState('');

  const handleChange = (e) => {
    setPass(e.target.value);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;

    return !passwordRegex.test(pass);
  };

  return (
    <div>
      <TextField
        type='password'
        label='Choose Password'
        value={pass}
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
