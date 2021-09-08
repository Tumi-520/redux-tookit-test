import { createSlice } from '@reduxjs/toolkit'

export const counterSlce = createSlice({
  name: 'counter',
  initialState: {
    count:0
  },
  reducers: {
    add(state, {payload}) {
      state.count=state.count+payload.step
    },
    down(state,{payload}) {
      state.count=state.count-payload.step
    }
  }
})
export const asyncAdd = () => dispatch => {
  setTimeout(() => {
    dispatch(add({step:3}))
  }, 2000);
}
export const { add, down } = counterSlce.actions
export default counterSlce.reducer