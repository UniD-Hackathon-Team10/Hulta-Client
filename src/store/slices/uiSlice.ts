import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  // darkMode: boolean;
}

const initialState: UiState = {
  // darkMode: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // changeDarkMode(state) {
    //   state.darkMode = !state.darkMode;
    // },
  },
});

export const {} = uiSlice.actions;

export default uiSlice.reducer;
