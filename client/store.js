import { configureStore } from '@reduxjs/toolkit'
import { polygonsReducer } from './polygonsSlice'

export default configureStore({
  reducer: {
    polygons: polygonsReducer
  }
})
