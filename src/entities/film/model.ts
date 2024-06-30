
export type Film = {
    id: string,
    title: string,
    description: string,
    genre: string,
    actors?: string[],
    rating: number,
    totalRatesCount: number, 
    release_year: string,
    poster?: string
}

export const film: Film = {
    id: '111',
    title: 'Lady Bag',
    description: 'лцоатлуоа цлоуалцоат цулаотцлоа цлуоатцлоалцат омлвтм вдалма хмзыаьлуда щоауолтат мощыдвв',
    genre: 'Семейный',
    rating: 4,
    totalRatesCount: 5,
    release_year: '2020',
}

export const GENRES = {
    '0': 'Не выбран',
    comedy: 'Комедия',
    drama: 'Драма',
    action: 'Боевик',
    thriller: 'Триллер',
    horror: 'Ужасы',
    family: 'Семейный',
    cartoon: 'Анимированный',
    fantasy: 'Фэнтези',
    romance: 'Романтика',
    adventure: 'Приключения',
    musical: 'Мьюзикл',
    war: 'Военный',
};
export type GenresEnglish = keyof typeof GENRES; 
export type GenresRussian = typeof GENRES[GenresEnglish];

export const YEARS = {
    '0': 'Не выбран',
    '2009': '2009',
    '2008': '2008',
    '2007': '2007',
    '2006': '2006',
    '1990-2005': '1990-2005',
    '1950-1989': '1950-1989',
}
export type YearsKeys = keyof typeof YEARS;