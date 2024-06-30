import { useLoaderData } from "react-router";

export function loader({ params }: any) {
    const filmId = params.filmId;
    return filmId;
}

export function FilmPage() {
    const filmId = useLoaderData() as string;

    return (
        <div>
            {filmId}
        </div>
    )
}