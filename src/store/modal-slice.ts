import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  showModal: boolean;
}

const initialState: ModalState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
