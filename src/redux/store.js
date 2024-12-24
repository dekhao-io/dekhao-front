import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./stepSlice"; // Adjust the path to match your project structure

const store = configureStore({
  reducer: {
    step: stepReducer,
  },
});

export default store;
