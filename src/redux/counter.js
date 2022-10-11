import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

// slice is something that combines state, reducers and actions in those reducers
export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  // reducers contains all the actions that modify the state
  reducers: {
    // action
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer