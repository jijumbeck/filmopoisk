import { GENRES, GenresEnglish, YEARS, YearsKeys } from "../../entities/film/model";
import { Select, SelectItem } from "../../shared/ui/Select";


export function FilmFilter({
    genre, year, update
}: {
    genre?: string, year?: string, update: (params: { genre?: string, release_year?: string }) => any
}) {
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
                    update({ genre: newGenre });
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
                    update({ release_year: newYear });
                }}
            >
                {
                    Object.keys(YEARS).map(option => <SelectItem key={option} value={option}>{YEARS[option as YearsKeys]}</SelectItem>)
                }
            </Select>
        </div>
    )
}