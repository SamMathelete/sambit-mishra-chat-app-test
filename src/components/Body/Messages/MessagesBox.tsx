import Message from "./Message";
import styles from "./MessagesBox.module.css";
import userImage1 from "../../../../assets/userImage1.png";
import userImage2 from "../../../../assets/userImage2.png";

const MessagesBox = () => {
  return <div className={styles.container}>
    <Message message="Yes, my order according to application. Thank you" me={true} img={userImage2} showImg={true} />
    <Message message="Yes, my order according to application. Thank you" me={false} img={userImage1} showImg={true} />
  </div>;
};

export default MessagesBox;
