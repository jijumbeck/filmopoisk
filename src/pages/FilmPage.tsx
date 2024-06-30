import { useLoaderData } from "react-router";
import { Film } from "../entities/film/model";
import { useGetMovie } from "../features/films/film.slice";
import { Loading } from "../shared/ui/Loading";
import { Error } from "../shared/ui/Error";
import styles from './film.module.css';
import { RatingFilm } from "../features/films/Rating";
import { Actor, useGetActor } from "../entities/actors/actor.slice";
import { ActorCard } from "../entities/actors/ActorCard";

export function loader({ params }: any) {
    const filmId = params.filmId;
    return filmId;
}

export function FilmPage() {
    const filmId = useLoaderData() as string;
    const { data, isLoading } = useGetMovie(filmId);

    if (!data && isLoading) {
        return (<Loading />)
    }

    if (!data) {
        return (<Error message="Фильм не найден." />)
    }

    return (
        <div>
            <FilmBanner film={data} />
            <h4
                style={{
                    margin: '20px 0',
                    textAlign: 'start',
                    fontSize: '24px',
                    fontWeight: '600',

                }}
            >Актеры</h4>
            <div
                style={{
                    display: 'flex',
                    gap: '24px',
                    overflowX: 'scroll'
                }}
            >
                {
                    data?.actors?.map(actor => <ActorWidget id={actor} />)
                }
            </div>
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

function ActorWidget({ id }: { id: string | Actor }) {
    if (typeof id === 'string') {
        return <FetchActor id={id} />
    }

    return (
        <ActorCard actor={id} />
    )
}

const FetchActor = ({ id }: { id: string }) => {
    const { data } = useGetActor(id);

    if (!data) {
        return (<Loading />);
    }

    return (
        <ActorCard actor={data} />
    )
}