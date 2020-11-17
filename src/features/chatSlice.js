import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatId: null,
    name: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.name = action.payload.name;
    },
  },
});
export const { setChat } = chatSlice.actions;
export const selectchat = (state) => state.chat.name;
export const selectchatId = (state) => state.chat.chatId;
export default chatSlice.reducer;
