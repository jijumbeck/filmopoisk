import { useSearchParams } from "react-router-dom";
import { FilmFilter } from "../features/films/FilmFilter";
import { FilmSearch } from "../features/films/FilmSearch";
import { useState } from "react";
import { useGetMoviesBySearch } from "../features/films/film.slice";


export function FilmSearchPage() {
    const [searchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(1);

    const genre = searchParams.get('genre') ?? undefined;
    const release_year = searchParams.get('year') ?? undefined;

    console.log(genre, release_year);

    const { data } = useGetMoviesBySearch({
        genre: genre,
        release_year: release_year,
        title: searchInput,
        page: page
    });

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '2fr 7fr',
                gap: '20px'
            }}
        >
            <aside>
                <FilmFilter genre={genre} year={release_year} />
            </aside>

            <div>
                <FilmSearch
                    inputSearch={{
                        value: searchInput,
                        onChange: (newValue) => setSearchInput(newValue)
                    }}
                    paginationSearch={{
                        value: page,
                        onChange: (newPage) => setPage(newPage)
                    }}
                    films={data}
                />
            </div>
        </div>
    )
}