import { configureStore } from "@reduxjs/toolkit";
import appLevelData from "./appLevelData";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appLevelData,
    search: searchSlice,
  },
});

export default store;
