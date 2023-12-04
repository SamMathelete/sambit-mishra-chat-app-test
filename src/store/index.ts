import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contact-slice";
import { createWrapper } from "next-redux-wrapper";
import modalSlice from "./modal-slice";
import screenSlice from "./screen-slice";

const makeStore = () =>
  configureStore({
    reducer: {
      contacts: contactsSlice.reducer,
      modal: modalSlice.reducer,
      screen: screenSlice.reducer,
    },
  });

const wrapper = createWrapper(makeStore);

export default wrapper;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
