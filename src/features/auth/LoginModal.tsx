import { createPortal } from "react-dom";
import styles from './login.module.css';
import { Input } from "../../shared/ui/Input";
import { Button } from "../../shared/ui/Button";
import closeIcon from './../../assets/close.svg';
import { MouseEventHandler, useState } from "react";
import { useAppDispatch } from "../../app/store";
import { loginUser } from "./auth.slice";

export function LoginModal({ setOpen }: { setOpen: (open: boolean) => any }) {
    return createPortal(
        <div
            style={{
                position: 'fixed'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#00000047'
                }}
            ></div>
            <div
                className={`${styles.modal}`}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Авторизация</h2>
                    <CloseButton
                        onClick={() => setOpen(false)}
                    />
                </div>
                <LoginForm setOpen={setOpen} />
            </div>
        </div>,
        document.body
    )
}

export function LoginForm({ setOpen }: { setOpen: (isOpen: boolean) => any }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    return (
        <div
            className={`${styles.form}`}
        >
            <Input
                label="Логин"
                placeholder="Введите логин"
                required

                value={username}
                onChange={setUsername}
            />
            <Input
                label="Пароль"
                placeholder="Введите пароль"
                required
                type="password"

                value={password}
                onChange={setPassword}
            />
            <div style={{ display: 'flex', gap: '8px' }}>
                <Button
                    color="primary"
                    onClick={() => {
                        dispatch(loginUser({ username, password }));
                    }}
                >
                    Войти
                </Button>
                <Button
                    color="secondary"
                    onClick={() => setOpen(false)}
                >
                    Отменить
                </Button>
            </div>
        </div>
    )
}

function CloseButton({ onClick }: { onClick: MouseEventHandler }) {
    return (
        <button
            className={`${styles.closeButton}`}
            onClick={onClick}
        >
            <img src={closeIcon} />
        </button>
    )
}