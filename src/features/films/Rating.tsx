import { Film } from "../../entities/film/model";
import { Rating } from "../../shared/ui/Rating";
import { useRateMovie } from "./rating.slice";
import { ratingStorage } from "./rating.storage";

export function RatingFilm({ film }: { film: Film }) {
    const [rateFilm] = useRateMovie();

    const setGrade = (grade: number) => {
        rateFilm({ movieId: film.id, user_rate: grade });
        ratingStorage.setGrade(film.id, grade);
    };

    return (
        <Rating
            setGrade={setGrade}
            meanGrade={film.rating}
            myGrade={ratingStorage.getGrade(film.id)?.grade}
        />
    )
}