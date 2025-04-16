import React from 'react';

const Button = ({
  label = 'Button',
  theme = 'Primary',
  icon = 'Icon-add',
  disabled = false,
  showIcon = false,
  className = "",
  onClick,
  ...rest
}) => {
  return (
    <>
      <div className='button-wrapper'>
        <button
          disabled={disabled}
          onClick={onClick}
          className={`button ${className} ${theme}`}
          {...rest}
        >
          {label}
          {showIcon && <>
            {icon}
          </>}
        </button>
      </div>
    </>
  );
};
export { Button };