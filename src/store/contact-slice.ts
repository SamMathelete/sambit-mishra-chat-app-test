import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";
import userImage1 from "../../assets/userImage1.png";
import { Chat, chats } from "../../data/sample-chats";

export interface contactState {
  name: string;
  img: StaticImageData;
  id: number;
}

export interface modContactsState extends contactState {
  chats: Chat[];
}

export interface contacts {
  contactList: modContactsState[];
  current: number;
  showChatImage: boolean;
  lastOnes: number[];
}

interface sendMessage {
  receiverID: number;
  message: string;
  me: boolean;
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
  lastOnes: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<string>) => {
      state.contactList.push({
        name: action.payload,
        img: userImage1,
        id: state.contactList.length + 1,
        chats,
      });
    },
    changeContact: (state, action: PayloadAction<number>) => {
      state.lastOnes.push(state.current);
      state.current = action.payload;
    },
    showChatImageToggle: (state) => {
      state.showChatImage = !state.showChatImage;
    },
    newChat: (state, action: PayloadAction<sendMessage>) => {
      const { receiverID, message, me } = action.payload;
      const receiverIndex = state.contactList.findIndex(
        (ele) => ele.id === receiverID
      );
      const lastMessage =
        state.contactList[receiverIndex].chats[
          state.contactList[receiverIndex].chats.length - 1
        ];
      const newCont = me ? lastMessage.me : !lastMessage.me;
      state.contactList[receiverIndex].chats.push({
        id: lastMessage.id + 1,
        me,
        message: message,
        cont: newCont,
      });
    },
    back: (state) => {
      if (state.lastOnes.length === 0) {
        alert("There's nothing back there any more.");
        return;
      }
      state.current = state.lastOnes[state.lastOnes.length - 1];
      state.lastOnes.pop();
    },
    delete: (state) => {
      if (state.contactList.length === 1) {
        alert("Can't delete the last contact!");
        return;
      }
      const newContactList = state.contactList.filter(
        (contact) => contact.id !== state.current
      );
      const newLastOnes = state.lastOnes.filter((ele) => ele !== state.current);
      state.contactList = newContactList;
      state.current = newContactList[0].id;
      state.lastOnes = newLastOnes;
    },
  },
});

export const contactsActions = contactsSlice.actions;

export default contactsSlice;
