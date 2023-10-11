import { configureStore } from "@reduxjs/toolkit";
import appLevelData from "./appLevelData";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appLevelData,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
