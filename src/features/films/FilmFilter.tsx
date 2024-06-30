//import { useNavigate } from "react-router";
import { GENRES, GenresEnglish, YEARS, YearsKeys } from "../../entities/film/model";
import { Select, SelectItem } from "../../shared/ui/Select";
import { useSearchParams } from "react-router-dom";

export function FilmFilter({ genre, year }: { genre?: string, year?: string }) {
    //const navigate = useNavigate();
    const [_, setSearchParams] = useSearchParams();

    console.log("HERE", genre, year);

    function navigateNewURL(newGenre?: string, newYear?: string) {
        const genreParam = newGenre === '0' || !newGenre ? (genre ?? '') : `genre=${newGenre}`;
        const yearParam = newYear === '0' || !newYear ? year ?? '' : `year=${newYear}`;

        console.log(genreParam, genre, yearParam, year);

        if (genreParam && yearParam) {
            setSearchParams(`?${genreParam}&${yearParam}`);
        } else {
            setSearchParams(`?${genreParam}${yearParam}`);
        }
    }

    return (
        <div
            style={{
                borderRadius: '8px',
                padding: '24px',
                backgroundColor: 'white'
            }}
        >
            <h3
                style={{ textAlign: 'start', marginBottom: '10px' }}
            >
                Фильтр
            </h3>

            <Select
                label="Жанр"
                placeholder="Выберите жанр"
                value={GENRES[genre as GenresEnglish]}
                onChange={(newGenre) => {
                    navigateNewURL(newGenre, year)
                }}
            >
                {
                    Object.keys(GENRES).map(option => <SelectItem key={option} value={option}>{GENRES[option as GenresEnglish]}</SelectItem>)
                }
            </Select>

            <Select
                label="Год выпуска"
                placeholder="Выберите год"
                value={YEARS[year as YearsKeys]}
                onChange={(newYear) => {
                    navigateNewURL(genre, newYear)
                }}
            >
                {
                    Object.keys(YEARS).map(option => <SelectItem key={option} value={option}>{YEARS[option as YearsKeys]}</SelectItem>)
                }
            </Select>
        </div>
    )
}