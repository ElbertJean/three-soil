import React, { useState } from 'react';
import styles from './InputPassword.module.css';

import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps {
    placeholder: string;
    label: string;
    value?: string;
    htmlFor?: string;
    className?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
}

function InputPassword(props: InputProps): JSX.Element {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    const {
        placeholder,
        value,
        label,
        htmlFor,
        className,
        onChange,
        onBlur
    } = props;

    const EyeIcon = FaEye;
    const EyeSlashIcon = FaEyeSlash;

    return (
        <div className={styles.divInput}>
            <label className={styles.label} htmlFor={htmlFor}>{label}</label>
            <div className={styles.divInputPassword}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={`${styles.input} ${className}`}
                />
                {showPassword ? (
                    <EyeSlashIcon className={styles.eye} onClick={handleShowPassword} />
                ) : (
                    <EyeIcon className={styles.eye} onClick={handleShowPassword} />
                )}
            </div>
        </div>
    );
}

export default InputPassword;
