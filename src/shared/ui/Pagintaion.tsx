import leftArrow from './../../assets/arrow-left.svg';
import rightArrow from './../../assets/arrow-right.svg';
import styles from './pagination.module.css';


export function Pagination({ page, setPageNumber }: { page: number, setPageNumber: (page: number) => any }) {

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            }}
        >
            <button
                disabled={page <= 1}
                onClick={() => setPageNumber(page - 1)}
                className={`${styles.pagination} ${page <= 1 ? styles.disabled : ''}`}
            >
                <img src={leftArrow} />
            </button>
            <p>{page}</p>
            <button
                onClick={() => setPageNumber(page + 1)}
                className={`${styles.pagination}`}
            >
                <img src={rightArrow} />
            </button>
        </div>
    )
}