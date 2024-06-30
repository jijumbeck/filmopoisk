import { Film } from "../../entities/film/model";
import { Rating } from "../../shared/ui/Rating";

export function RatingFilm({ film }: { film: Film }) {

    const setGrade = (grade: number) => console.log('Grade: ', grade);

    return (
        <Rating
            setGrade={setGrade}
            meanGrade={film.rating}
        />
    )
}



function getMyGrade(filmid: string) {
    
}

function getMyGrades() {
    const grades = localStorage.getItem('my-grades');
}