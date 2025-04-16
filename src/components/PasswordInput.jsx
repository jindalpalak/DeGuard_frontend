import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from 'react';

const PasswordInput = ({
    placeholder = "",
    className,
    name = "",
    label,
    disabled = false,
    maxLength = 100,
    minLength = 500,
    errorMessage = "",
    onChange,
    value,
    width,
    ...rest
}) => {
    const [isPassword, setIsPassword] = useState(true);

    return (
        <div className={`input-wrapper password-wrapper`} style={width ? { width: width } : {}}>
            {label && <div className="label">{label}</div>}
            <input
                className="input-field"
                placeholder={placeholder}
                type={isPassword ? "password" : "text"}
                name={name}
                disabled={disabled}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                minLength={minLength}
                style={{
                    ...(errorMessage !== "" ? { borderColor: "red" } : {}),
                }}
                autoComplete="off"
                {...rest}
            />
            {isPassword && <IoEyeOffOutline onClick={() => setIsPassword(!isPassword)} />}
            {!isPassword && <IoEyeOutline onClick={() => setIsPassword(!isPassword)} />}
        </div>
    )
}

export default PasswordInput;