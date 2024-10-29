import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`
    }),
    // mutation example
    // updatePokemon: builder.mutation<any, any>({
    //   query: (post) => ({
    //     url: `post/${post.id}`,
    //     method: 'PUT',
    //     body: post
    //   })
    // })
  })
})

export const {
  useGetPokemonByNameQuery,
  // useUpdatePokemonMutation
} = pokemonApi
