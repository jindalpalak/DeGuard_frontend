import React from "react";

const InputField = ({
  type = "text",
  placeholder = type === "number" ? "" : "",
  className,
  name = "",
  label,
  disabled = false,
  maxLength = 100,
  minLength = 500,
  onChange,
  value,
  width,
  ...rest
}) => {
  return (
    <div className={`input-wrapper ${className || ""}`} style={width ? { width } : {}} {...rest}>
      {label && <div className="label">{label}</div>}
      <input
        className="input-field"
        placeholder={placeholder}
        type={type}
        name={name}
        disabled={disabled}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        minLength={minLength}
        autoComplete="off"
        {...rest}
      />
    </div>
  );
};

export default InputField;
