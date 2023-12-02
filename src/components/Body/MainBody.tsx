import Chats from "./Chats/Chats";
import styles from "./MainBody.module.css";
import Messages from "./Messages/Messages";

const MainBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chatsContainer}>
        <Chats />
      </div>
      <div className={styles.messagesContainer}>
        <Messages />
      </div>
    </div>
  );
};

export default MainBody;
