import React, { useState }from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Gender = ({onChange}) => {
  const [gender, setGender] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setGender(value)
    onChange(value)
  };

  return (
    <div>
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={gender}
        onChange={handleChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </div>
  );
};

export default Gender;
