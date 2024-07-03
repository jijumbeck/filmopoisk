import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../shared/api";
import { tokenStorage } from "../auth/auth.storage";
import { filmAPI } from "./film.slice";

export const ratingAPI = createApi({
    reducerPath: 'ratingAPI',
    tagTypes: ['Film'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        headers: { 'Content-Type': 'application.json', 'Authorization': `Bearer ${tokenStorage.get()}` }
    }),
    endpoints: builder => ({
        rateMovie: builder.mutation<unknown, { movieId: string, user_rate: number }>({
            query: (params) => ({
                url: `rateMovie`,
                method: 'POST',
                body: JSON.stringify(params)
            }),
            invalidatesTags: (_, __, params) => [{ type: 'Film', id: params.movieId }],
            onQueryStarted: async (arg, api) => {
                await api.queryFulfilled;
                api.dispatch(filmAPI.util.invalidateTags([{ type: 'Film', id: arg.movieId }]))
            }
        })
    })
})

type RateMovieHook = typeof ratingAPI.endpoints.rateMovie.useMutation;
export const useRateMovie: RateMovieHook = ratingAPI.endpoints.rateMovie.useMutation;