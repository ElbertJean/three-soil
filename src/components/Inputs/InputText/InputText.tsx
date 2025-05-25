import React from 'react';
import styles from './InputText.module.css';

interface InputProps {
    placeholder: string;
    label: string;
    value?: string;
    htmlFor?: string;
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void
}

function InputText (props: InputProps) {
    
    const { 
        placeholder, 
        value,
        label,
        htmlFor, 
        className,
        onChange, 
        onBlur
    } = props;
    
    return (
        <div className={styles.divInput}>
            <label className={styles.label} htmlFor={htmlFor}>{label}</label>
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`${styles.input} ${className}`}
            />
        </div>
    );
}

export default InputText;