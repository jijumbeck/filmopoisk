import { CSSProperties, MouseEventHandler, PropsWithChildren, ReactNode, useEffect, useId, useState } from "react";
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

    useEffect(() => {
        const callback = (e: MouseEvent) => {
            if (e.target) {
                const id = (e.target as HTMLElement).id;
                if (id.match(/select-item/)) {
                    const value = id.split(':')[1];
                    props?.onChange?.(value);
                }
            }
        }

        const node = document.getElementById(`parent:select${id}`);
        node?.addEventListener('click', callback);

        return () => node?.removeEventListener('click', callback);
    }, []);

    return (
        <div
            className={`${styles.select}`}
            id={`parent:select${id}`}
            onClick={() => setIsOpen(!isOpen)}
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

export function SelectItem({ children, value, style }: PropsWithChildren<{ value: any, style?: CSSProperties }>) {
    return (
        <div
            className={`${styles.selectItem}`}
            style={style}
            id={`select-item:${value}`}
        >
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