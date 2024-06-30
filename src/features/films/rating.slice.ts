import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../shared/api";
import { tokenStorage } from "../auth/auth.storage";

export const ratingAPI = createApi({
    reducerPath: 'ratingAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        headers: { 'Content-Type': 'application.json', 'Authorization': `Bearer ${tokenStorage.get()}` }
    }),
    endpoints: builder => ({
        rateMovie: builder.mutation<unknown, { movieId: string, user_rate: number }>({
            query: (params) => ({
                url: `rateMovie`,
                method: 'POST',
                body: params
            })
        })
    })
})

type RateMovieHook = typeof ratingAPI.endpoints.rateMovie.useMutation;
export const useRateMovie: RateMovieHook = ratingAPI.endpoints.rateMovie.useMutation;