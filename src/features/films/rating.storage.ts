
const RATING_VALUES_LOCAL_STORAGE_KEY = 'ratings';

export const ratingStorage = {
    getGrades: () => {
        return JSON.parse(
            localStorage.getItem(RATING_VALUES_LOCAL_STORAGE_KEY) ?? '[]'
        )
    },

    setGrade: (filmId: string, grade: number) => {
        const ratings = JSON.parse(
            localStorage.getItem(RATING_VALUES_LOCAL_STORAGE_KEY) ?? '[]'
        );

        ratings.push({
            filmId,
            grade
        });

        localStorage.setItem(RATING_VALUES_LOCAL_STORAGE_KEY, JSON.stringify(ratings));
    },

    getGrade: (filmId: string) => {
        const ratings = JSON.parse(
            localStorage.getItem(RATING_VALUES_LOCAL_STORAGE_KEY) ?? '[]'
        );
        return ratings.find((value: { filmId: string, grade: string }) => value?.filmId === filmId);
    }
}