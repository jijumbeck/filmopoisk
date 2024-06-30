
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
    endpoints: builder => ({

        getMovie: builder.query<Film, string>({
            query: (id) => `movie/${id}`
        }),

        getMoviesBySearch: builder.query<Film[], SearchParams>({
            query: (params) => `search?title=${params.title ?? ''}&genre=${params.genre ?? ''}&release_year=${params.release_year ?? ''}`
        })

    })
})

type GetMovieHook = typeof filmAPI.endpoints.getMovie.useQuery;
type GetMoviesBySearchHook = typeof filmAPI.endpoints.getMoviesBySearch.useQuery;

export const useGetMovie: GetMovieHook = filmAPI.endpoints.getMovie.useQuery;
export const useGetMoviesBySearch: GetMoviesBySearchHook = filmAPI.endpoints.getMoviesBySearch.useQuery;