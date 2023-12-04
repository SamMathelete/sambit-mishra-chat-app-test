import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  showModal: boolean;
  showDrawer: boolean;
}

const initialState: ModalState = {
  showModal: false,
  showDrawer: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
    toggleDrawer: (state) => {
      state.showDrawer = !state.showDrawer;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
