import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Dimensions {
  width: number;
  height: number;
}

interface Screen {
  Dimensions: Dimensions;
  showChat: boolean;
  showMessage: boolean;
  lastState: boolean;
}

const initialState: Screen = {
  Dimensions: { width: 0, height: 0 },
  showChat: true,
  showMessage: true,
  lastState: true,
};

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    changeScreenSize: (state, action: PayloadAction<Dimensions>) => {
      state.Dimensions = action.payload;
    },
    showChatScreen: (state) => {
      state.showChat = true;
    },
    showMessageScreen: (state) => {
      state.showMessage = true;
    },
    hideChatScreen: (state) => {
      state.showChat = false;
    },
    hideMessageScreen: (state) => {
      state.showMessage = false;
    },
    toggleLastState: (state) => {
      state.lastState = !state.lastState;
    },
  },
});

export const screenActions = screenSlice.actions;
export default screenSlice;
