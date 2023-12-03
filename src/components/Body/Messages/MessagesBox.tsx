import Message from "./Message";
import styles from "./MessagesBox.module.css";
import userImage1 from "../../../../assets/userImage1.png";
import userImage2 from "../../../../assets/userImage2.png";
import { useAppSelector } from "@/store/hooks";

const MessagesBox = () => {
  const current = useAppSelector((state) => state.contacts.current);
  const chats = useAppSelector(
    (state) => state.contacts.contactList[current - 1].chats
  );
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
