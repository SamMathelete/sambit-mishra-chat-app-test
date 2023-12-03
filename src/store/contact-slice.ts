import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import userImage1 from "../../assets/userImage1.png";
import { Chat, chats } from "../../data/sample-chats";

export interface contactState {
  name: string;
  img: StaticImageData;
  id: number;
}

interface modContactsState extends contactState {
  chats: Chat[];
}

export interface contacts {
  contactList: modContactsState[];
  current: number;
  showChatImage: boolean;
}

interface sendMessage {
  receiverID: number;
  message: string;
}

const initialState: contacts = {
  contactList: [
    {
      name: "Caressa Jessalin",
      img: userImage1,
      id: 1,
      chats,
    },
    {
      name: "Letty Bride",
      img: userImage1,
      id: 2,
      chats,
    },
  ],
  current: 1,
  showChatImage: true,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<contactState>) => {
      state.contactList.push({ ...action.payload, chats });
    },
    changeContact: (state, action: PayloadAction<number>) => {
      state.current = action.payload;
    },
    showChatImageToggle: (state) => {
      state.showChatImage = !state.showChatImage;
    },
    newChat: (state, action: PayloadAction<sendMessage>) => {
      const { receiverID, message } = action.payload;
      const lastMessage =
        state.contactList[receiverID - 1].chats[
          state.contactList[receiverID - 1].chats.length - 1
        ];
      const newCont = lastMessage.me;
      state.contactList[receiverID - 1].chats.push({
        id: lastMessage.id + 1,
        me: true,
        message: message,
        cont: newCont,
      });
    },
  },
});

export const contactsActions = contactsSlice.actions;

export default contactsSlice;
