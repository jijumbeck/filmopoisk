import { MouseEventHandler, ReactNode } from "react";
import styles from './style.module.css';


const enum Color {
    Primary = 'primary',
    Secondary = 'secondary'
}

interface ButtonProps {
    color?: string,
    onClick?: MouseEventHandler
    children?: ReactNode
}

export function Button(props: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${props.color === Color.Secondary ? styles.secondary : ''}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}