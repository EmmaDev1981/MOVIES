import { configureStore } from '@reduxjs/toolkit'
import moviesSlices from './slices/moviesSlices'

export default configureStore({
  reducer: moviesSlices
})