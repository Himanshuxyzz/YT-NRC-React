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
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appLevelDataSlice.actions;

export default appLevelDataSlice.reducer;
