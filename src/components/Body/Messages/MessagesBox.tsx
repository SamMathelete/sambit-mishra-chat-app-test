import Message from "./Message";
import styles from "./MessagesBox.module.css";
import userImage1 from "../../../../assets/userImage1.png";
import userImage2 from "../../../../assets/userImage2.png";
import { useAppSelector } from "@/store/hooks";

const MessagesBox = () => {
  const activeContactID = useAppSelector((state) => state.contacts.current);
  const activeContactIndex = useAppSelector((state) =>
    state.contacts.contactList.findIndex((ele) => ele.id === activeContactID)
  );
  const activeContact = useAppSelector(
    (state) => state.contacts.contactList[activeContactIndex]
  );
  const chats = activeContact.chats;
  return (
    <div className={styles.container}>
      {chats.map((chat) => (
        <Message
          key={chat.id}
          message={chat.message}
          me={chat.me}
          img={chat.me ? userImage2 : userImage1}
          showImg={!chat.cont}
          first={chat.id === 1}
        />
      ))}
    </div>
  );
};

export default MessagesBox;
