
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../shared/api'
import { Film } from '../../entities/film/model'

type SearchParams = {
    title?: string,
    genre?: string,
    release_year?: string,
    sort_by?: 'release_year' | 'title' | 'rating',
    order?: 'asc' | 'desc',
    page?: number,
    limit?: number
}

export const filmAPI = createApi({
    reducerPath: 'filmApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL, headers: { 'Content-Type': 'application.json' } }),
    tagTypes: ['Film'],
    endpoints: builder => ({

        getMovie: builder.query<Film, string>({
            query: (id) => `movie/${id}`,
            providesTags: (_, __, id) => [{ type: 'Film', id }]
        }),

        getMoviesBySearch: builder.query<Film[], SearchParams>({
            query: (params) => `search${buildURLForMoviesBySearch(params)}`,
            transformResponse: (response: { search_result: Film[] }) => response.search_result
        })

    })
})

function buildURLForMoviesBySearch(params: SearchParams) {
    const query = [];

    if (params.title) {
        query.push(`title=${params.title}`);
    }
    if (params.genre) {
        query.push(`genre=${params.genre}`);
    }
    if (params.release_year) {
        query.push(`release_year=${params.release_year}`);
    }
    if (params.page) {
        query.push(`page=${params.page}`);
    }

    if (query.length === 0) {
        return '';
    }

    return `?${query.join('&')}`
}

type GetMovieHook = typeof filmAPI.endpoints.getMovie.useQuery;
type GetMoviesBySearchHook = typeof filmAPI.endpoints.getMoviesBySearch.useQuery;

export const useGetMovie: GetMovieHook = filmAPI.endpoints.getMovie.useQuery;
export const useGetMoviesBySearch: GetMoviesBySearchHook = filmAPI.endpoints.getMoviesBySearch.useQuery;