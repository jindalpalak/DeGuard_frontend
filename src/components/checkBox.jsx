import React, { useEffect, useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, FormControl, FormLabel } from '@mui/material';

const CustomCheckbox = ({ label = 'Select Options', options, onChange, selectedValue }) => {
  const [checkedValues, setCheckedValues] = useState([]);

  useEffect(() => {
    setCheckedValues(selectedValue || []);
  }, [selectedValue]);

  const handleChange = (value) => {
    const updatedValues = checkedValues.includes(value)
      ? checkedValues.filter((v) => v !== value)
      : [...checkedValues, value];

    setCheckedValues(updatedValues);
    onChange(updatedValues);
  };

  return (
    <FormControl component="fieldset" variant="standard" className='checkbox_wrapper'>
      {label && <FormLabel component="legend" className='label'>{label}</FormLabel>}
      <FormGroup>
        {options?.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={checkedValues.includes(option.value)}
                onChange={() => handleChange(option.value)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CustomCheckbox;
