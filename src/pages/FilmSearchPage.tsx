import { useSearchParams } from "react-router-dom";
import { FilmFilter } from "../features/films/FilmFilter";
import { FilmSearch } from "../features/films/FilmSearch";
import { useState } from "react";
import { useGetMoviesBySearch } from "../features/films/film.slice";


export function FilmSearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(1);

    const genre = searchParams.get('genre') ?? undefined;
    const release_year = searchParams.get('year') ?? undefined;

    function setNewParams(params: { genre?: string, release_year?: string }) {
        setSearchParams((previous) => {
            if (params.genre) {
                if (params.genre === '0') {
                    previous.delete('genre');
                } else {
                    previous.set('genre', params.genre);
                }
            }

            if (params.release_year) {
                if (params.release_year === '0') {
                    previous.delete('year');
                } else {
                    previous.set('year', params.release_year);
                }
            }

            return previous;
        })
        setPage(1);
    }

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
                <FilmFilter genre={genre} year={release_year} update={setNewParams} />
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