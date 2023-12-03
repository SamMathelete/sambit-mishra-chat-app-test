import { useState } from "react";
import styles from "./Chats.module.css";
import Image from "next/image";
import showChats from "../../../../assets/showChats.png";
import IconChatButton from "./IconChatButton";
import { contactsActions } from "@/store/contact-slice";
import { contactState } from "@/store/contact-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Chats = () => {
  const [selectedUser, setSelectedUser] = useState<number>(1);
  const contacts: contactState[] = useAppSelector(
    (state) => state.contacts.contactList
  );

  const dispatch = useAppDispatch();

  const selectHandler = (id: number) => {
    dispatch(contactsActions.changeContact(id));
    setSelectedUser(() => id);
  };

  return (
    <>
      <div className={styles.upperContainer}>
        <div className={styles.text0}>ALL YOUR CHATS</div>
        <div className={styles.showImageButton}>
          <Image
            src={showChats}
            alt="chat images"
            style={{
              marginRight: "1rem",
            }}
          />
          Chat Images: ON
        </div>
        <div className={styles.text1}>
          When a bot sends you images, you will be charged one secondary image
        </div>
        <div className={styles.chatButtons}>
          {contacts.map((contact) => (
            <IconChatButton
              key={contact.id}
              name={contact.name}
              img={contact.img}
              imgAlt={contact.name}
              lastChat="Lorem ipsum dolor sit amet abcd efgh"
              selected={selectedUser === contact.id}
              onClick={selectHandler.bind(this, contact.id)}
            />
          ))}
        </div>
      </div>
      <div className={styles.hbar} />
      <div className={styles.lowerContainer}>
        <div className={styles.plusButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M13.2664 0.0572796C10.4119 0.408964 7.89147 1.45816 5.58793 3.26348C4.97249 3.74412 3.53644 5.22119 3.04994 5.86595C1.50838 7.92331 0.529526 10.2151 0.130949 12.6828C-0.0155861 13.5913 -0.0448933 15.8304 0.0723352 16.8151C0.465051 20.0271 1.87179 23.0048 4.10499 25.3435C6.42026 27.7642 9.22788 29.2589 12.5572 29.8392C13.5771 30.015 15.7399 30.056 16.8184 29.9154C23.2777 29.1065 28.4475 24.3177 29.737 17.9581C30.0125 16.6099 30.0828 14.535 29.9128 13.1224C29.0688 6.34072 23.6528 0.92477 16.8712 0.0807247C16.0799 -0.0130577 13.9815 -0.0306416 13.2664 0.0572796ZM15.6168 7.4075C15.7751 7.50129 15.9333 7.66541 16.033 7.83539L16.1971 8.11087L16.2147 10.9361L16.2323 13.7613L19.0575 13.7789L21.8827 13.7965L22.1582 13.9606C22.9612 14.4295 22.9612 15.5666 22.1582 16.0355L21.8827 16.1996L19.0575 16.2172L16.2323 16.2348L16.2147 19.06L16.1971 21.8852L16.033 22.1607C15.5641 22.9637 14.427 22.9637 13.958 22.1607L13.7939 21.8852L13.7763 19.06L13.7588 16.2348L10.9336 16.2172L8.10835 16.1996L7.83286 16.0355C7.02985 15.5666 7.02985 14.4295 7.83286 13.9606L8.10835 13.7965L10.9336 13.7789L13.7588 13.7613L13.7763 10.9361L13.7939 8.11087L13.9522 7.83539C14.3097 7.23752 15.0131 7.05582 15.6168 7.4075Z"
              fill="#F3AE9F"
            />
          </svg>
        </div>
        <div className={styles.text2}>Create new bot</div>
      </div>
    </>
  );
};

export default Chats;
