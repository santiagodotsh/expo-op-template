import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../actions/axios-base-query'
import type { Pokemon } from '@/interfaces/pokemon.interface'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: axiosBaseQuery('v2'),
  endpoints: builder => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: name => ({
        url: `pokemon/${name}`,
        method: 'GET'
      })
    }),
    // mutation example
    // updatePokemon: builder.mutation<any, any>({
    //   query: post => ({
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
