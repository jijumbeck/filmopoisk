import { useLoaderData } from "react-router";
import { Film, GENRES, GenresEnglish, YEARS, YearsKeys } from "../entities/film/model";
import { useGetMovie } from "../features/films/film.slice";
import { Loading } from "../shared/ui/Loading";
import { Error } from "../shared/ui/Error";
import styles from './film.module.css';
import { RatingFilm } from "../features/films/Rating";

export function loader({ params }: any) {
    const filmId = params.filmId;
    return filmId;
}

export function FilmPage() {
    const filmId = useLoaderData() as string;
    const { data, isLoading } = useGetMovie(filmId);

    console.log(data);

    if (!data && isLoading) {
        return (<Loading />)
    }

    if (!data) {
        return (<Error message="Фильм не найден." />)
    }

    return (
        <div>
            <FilmBanner film={data} />
        </div>
    )
}

function FilmBanner({ film }: { film: Film }) {
    return (
        <div
            className={`${styles.film}`}
        >
            <img src={`http://localhost:3030/static/images/${film.id}.jpeg`} />

            <div style={{ width: '100%' }}>
                <div className={`${styles.head}`}>
                    <h1>{film.title}</h1>
                    <RatingFilm film={film} />
                </div>

                <div className={`${styles.info}`}>
                    <p><span>Жанр: </span> {film.genre}</p>
                    <p><span>Год выпуска: </span>{film.release_year}</p>
                    <p><span>Описание: </span></p>
                    <p>{film.description}</p>
                </div>
            </div>
        </div>
    )
}