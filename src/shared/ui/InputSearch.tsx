import { MouseEventHandler, useState } from 'react';
import { CloseIcon, SearchIcon } from './Icons';
import styles from './input.module.css';
import { Controlled } from './Input';


interface InputSearchProps extends Controlled<string> {
    placeholder?: string;
}

export function InputSearch(props: InputSearchProps) {
    const [focus, setFocus] = useState(false);

    return (
        <div className={`${styles.inputBase} ${styles.inputSearchContainer} ${focus ? styles.focus : ''}`}>
            <SearchIcon />
            <input
                value={props.value}
                onChange={e => props?.onChange?.(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={props.placeholder}
            />
            {props.onChange && props.value ? <Button onClick={() => props?.onChange?.('')} /> : null}
        </div>
    )
}

function Button({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button
            onClick={onClick}
        >
            <CloseIcon />
        </button>
    )
}