import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import userImage1 from "../../assets/userImage1.png";

export interface contactState {
  name: string;
  img: StaticImageData;
  id: number;
}

export interface contacts {
  contactList: contactState[];
  current: number;
}

const initialState: contacts = {
  contactList: [
    {
      name: "Caressa Jessalin",
      img: userImage1,
      id: 1,
    },
    {
      name: "Letty Bride",
      img: userImage1,
      id: 2,
    },
  ],
  current: 1,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action: PayloadAction<contactState>) => {
      state.contactList.push(action.payload);
    },
    changeContact: (state, action: PayloadAction<number>) => {
      state.current = action.payload;
    },
  },
});

export const contactsActions = contactsSlice.actions;

export default contactsSlice;
