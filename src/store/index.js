import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import movieSlice from "./features/movieSlice";
export default configureStore({
  reducer: {
    counter: counterSlice,
    movie:movieSlice
  }
})