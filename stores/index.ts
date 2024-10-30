import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon.api'
import { counterSlice } from './features/counter.slice'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
