import { createSlice } from "@reduxjs/toolkit";

const appLevelDataSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    // actions
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = appLevelDataSlice.actions;

export default appLevelDataSlice.reducer;
