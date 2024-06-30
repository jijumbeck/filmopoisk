import { ChangeEventHandler, useId } from "react";
import styles from './input.module.css';

export interface Controlled<T> {
    value?: T,
    onChange?: (newValue: T) => any
}

export interface InputProps extends Controlled<string> {
    placeholder?: string,
    error?: boolean,
    label?: string,
    required?: boolean,
    description?: string,
    type?: string;
}

export function Input(props: InputProps) {
    const id = useId();

    return (
        <div className={`${styles.inputContainer}`}>

            {!!props.label &&
                <label htmlFor={`input${id}`} className={`${styles.label} ${props.required && styles.required}`}>
                    {props.label}
                </label>
            }

            <input
                id={`input${id}`}
                value={props?.value}
                onChange={e => props?.onChange?.(e.target.value)}

                className={`${styles.inputBase} ${styles.input} ${props.error && styles.error}`}
                placeholder={props.placeholder}
                required={props.required}
                type={props.type}
            />

            {!!props.description && <div className={`${styles.description}`}>{props.description}</div>}
        </div>
    )
}

export function SearchInput() {

}