import { CSSProperties, MouseEventHandler, PropsWithChildren, ReactNode, useId, useState } from "react";
import { Controlled } from "./Input";
import styles from './select.module.css';
import arrowIcon from './../../assets/arrow-left.svg';
import { createPortal } from "react-dom";

interface SelectProps extends Controlled<string> {
    label?: string;
    placeholder?: string;
    children?: ReactNode;
}


export function Select(props: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const id = useId();

    return (
        <div
            className={`${styles.select}`}
            id={`parent:select${id}`}
        >
            {props.label && <label htmlFor={`select${id}`}>{props.label}</label>}
            <div
                id={`select${id}`}
                className={`${styles.selectHeader}`}
                tabIndex={0}
            >
                {
                    props.value
                        ? <p>{props.value}</p>
                        : <p className={`${styles.placeholder}`}>{props.placeholder}</p>
                }
                <SelectButton
                    open={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            {
                isOpen && <Modal anchorId={`parent:select${id}`}>{props.children}</Modal>
            }
            <div>
            </div>
        </div>
    )
}

function Modal({ children, anchorId }: PropsWithChildren<{ anchorId: string }>) {
    return createPortal(
        <div className={`${styles.modal}`}>
            {children}
        </div>,
        document.getElementById(anchorId) ?? document.body
    )
}

export function SelectItem({ children, ...style }: PropsWithChildren<CSSProperties>) {
    return (
        <div className={`${styles.selectItem}`} style={style}>
            {children}
        </div>
    )
}

function SelectButton({
    onClick,
    open
}: {
    onClick: MouseEventHandler<HTMLButtonElement>
    open: boolean
}) {
    return (
        <button
            onClick={onClick}
        >
            <img
                className={`${open ? styles.open : ''}`}
                src={arrowIcon}
            />
        </button>
    )
}