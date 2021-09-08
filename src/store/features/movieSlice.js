import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const load =()=>fetch('http://api.tianapi.com/txapi/godreply/index?key=6f9ec1c3047d7df2ccb8fad97f179d7f&num=10').then(res=>res.json())

export const loadDate = createAsyncThunk('movie/loadDate', async () => {
  const res = await load()
  return res
})

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    list:[]
  },
  
  extraReducers: {
    [loadDate.fulfilled](state,{payload}) {
      console.log(payload);
      state.list =payload.newslist
    }
  }
})

export default movieSlice.reducer