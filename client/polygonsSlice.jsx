import { createSlice } from '@reduxjs/toolkit'

export const polygonsSlice = createSlice({
  name: 'polygons',
  initialState: [{
    size: 80,
    sides: 3,
    speed: 1
  }],
  reducers: {
    addPolygon: (state) => {
      state.push({
        size: 80,
        sides: 3,
        speed: 1
      })
    },
    updatePolygon: (state, action) => {
      const { index, ...rest } = action.payload
      state[index] = rest
    }
  }
})

export const { addPolygon, updatePolygon } = polygonsSlice.actions

export const polygonsReducer = polygonsSlice.reducer
