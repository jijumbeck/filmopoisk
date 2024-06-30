import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { Button } from "../../shared/ui/Button";
import personIcon from './../../assets/person.svg';
import { LoginModal } from "./LoginModal";
import { logoutUser } from "./auth.slice";

export function AuthHeader() {
    const isAuth = useAppSelector(store => store.auth.isAuth);

    if (!isAuth) {
        return (
            <LoginButton />
        )
    }

    return (
        <>
            <img
                src={personIcon}
                style={{
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    width: '32px',
                    height: '32px',
                    padding: '8px'
                }}
            />
            <LogoutButton />
        </>
    )
}

function LoginButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                color='primary'
                onClick={() => setOpen(true)}
            >
                Войти
            </Button>
            {
                open &&
                (<LoginModal
                    setOpen={setOpen}
                />)
            }

        </>
    )
}

function LogoutButton() {
    const dispatch = useAppDispatch();

    return (
        <Button
            color='secondary'
            onClick={() => {
                dispatch(logoutUser({}));
            }}
        >
            Выйти
        </Button>
    )
}