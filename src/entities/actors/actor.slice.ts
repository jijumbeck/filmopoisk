import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Actor = {
    id: string,
    name: string,
    photo: string
}

export const actorApi = createApi({
    reducerPath: 'actor',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004', headers: { 'Content-Type': 'application.json' } }),
    endpoints: builder => ({
        getActor: builder.query<Actor, string>({
            query: (id) => `actor?id=${id}`
        })
    })
})

type GetActorHook = typeof actorApi.endpoints.getActor.useQuery;
export const useGetActor: GetActorHook = actorApi.endpoints.getActor.useQuery;