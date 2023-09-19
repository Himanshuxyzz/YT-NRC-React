import { configureStore } from "@reduxjs/toolkit";
import appLevelData from "./appLevelData";

const store = configureStore({
  reducer: {
    app: appLevelData,
  },
});

export default store;
