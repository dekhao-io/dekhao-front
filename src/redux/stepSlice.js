import { createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
  name: "step",
  initialState: {
    currentStep: 1,
    formData: {}, // Holds data from various steps
  },
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    previousStep: (state) => {
      state.currentStep -= 1;
    },
    resetStep: (state) => {
      state.currentStep = 1;
      state.formData = {};
    },
    saveFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { nextStep, previousStep, resetStep, saveFormData } =
  stepSlice.actions;
export default stepSlice.reducer;
