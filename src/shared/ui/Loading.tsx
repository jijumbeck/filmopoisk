import loadingIcon from './../../assets/loading.svg';
import styles from './loading.module.css';

export function Loading() {
    return (
        <img
            className={`${styles.loading}`}
            src={loadingIcon}
        />
    )
}