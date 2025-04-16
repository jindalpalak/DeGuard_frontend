import React from 'react';
import { Switch } from '@mui/material';

const Toggle = ({
  label = "Select Option",
  checked,
  onChange,
  disabled = false
}) => {
    return (
        <div className='toggle_wrapper'>
            {label && <span className='label'>{label}</span>}
            <Switch
                checked={checked}
                onChange={(e) => onChange && onChange(e.target.checked)}
                disabled={disabled}
            />
        </div>
    );
};

export default Toggle;
