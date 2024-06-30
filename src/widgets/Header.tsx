import { AuthHeader } from '../features/auth/AuthHeader';
import styles from './header.module.css';

export function Header() {
    return (
        <header
            className={`${styles.header}`}
        >
            <h1>Фильмопоиск</h1>
            <AuthHeader />
        </header>
    )
}