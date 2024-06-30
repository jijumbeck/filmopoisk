import { ReactNode } from "react";
import { Film } from "./model";
import styles from './film.module.css';
import { RatingFilm } from "../../features/films/Rating";
import { useNavigate } from "react-router";

export function FilmCard({ film, renderRating }: { film: Film, renderRating: ReactNode }) {
    const navigate = useNavigate();
    return (
        <div
            className={`${styles.film}`}
            onClick={() => navigate(`/films/${film.id}`)}
        >
            <img src={`http://localhost:3030/static/images/${film.id}.jpeg`} />

            <div>
                <h2>{film.title}</h2>
                <div className={`${styles.info}`}>
                    <p className={`${styles.property}`}>Жанр</p>
                    <p>{film.genre}</p>

                    <p className={`${styles.property}`}>Год выпуска</p>
                    <p>{film.release_year}</p>

                    <p className={`${styles.property}`}>Описание</p>
                    <p>{film.description}</p>
                </div>
            </div>

            <div>
                {renderRating}
            </div>
        </div>
    )
}

export function FilmList({ films }: { films: Film[] }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
            }}
        >
            {
                films.map(film => <FilmCard film={film} key={film.id} renderRating={<RatingFilm film={film} />} />)
            }
        </div>
    )
}