import { createSlice } from "@reduxjs/toolkit";
import { LiveChatMsgsBucket } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LiveChatMsgsBucket, 1);
      state.messages.unshift(action.payload);

      // state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
