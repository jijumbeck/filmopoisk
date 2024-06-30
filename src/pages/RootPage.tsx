import { Outlet } from "react-router";
import styles from './root.module.css';
import { Header } from "../widgets/Header";
import { useCheckToken } from "../features/auth/helpers";

export function RootPage() {
    useCheckToken();

    return (
        <div className={`${styles.layout}`}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

