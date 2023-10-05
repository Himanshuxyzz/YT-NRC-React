import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheRestults: (state, action) => {
      // {"ip": ["iphone","iphone 11"]}
      //   state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheRestults } = searchSlice.actions;

export default searchSlice.reducer;
