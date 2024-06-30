import { Outlet } from "react-router";
import styles from './root.module.css';
import { Header } from "../widgets/Header";

export function RootPage() {
    return (
        <div className={`${styles.layout}`}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

