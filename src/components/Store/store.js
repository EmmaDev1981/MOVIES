import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import moviesSlices from './slices/moviesSlices'

const reducers = combineReducers({
  reducer: moviesSlices
})

const presistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(presistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store

// export default configureStore({
//   reducer: moviesSlices
// })