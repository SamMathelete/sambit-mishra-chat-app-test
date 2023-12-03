import Image, { StaticImageData } from "next/image";
import styles from "./IconChatButton.module.css";
import { FC } from "react";

interface Props {
  img: StaticImageData;
  imgAlt: string;
  name: string;
  lastChat: string;
  selected: boolean;
  onClick: () => void;
}

const IconChatButton: FC<Props> = ({ img, imgAlt, name, lastChat, selected, onClick }) => {
  const showableLength = lastChat.length > 20 ? 20 : lastChat.length;
  const contChat = showableLength < lastChat.length ? "..." : "";

  return (
    <div className={`${styles.container} ${selected && styles.selected}`} onClick={onClick}>
      <div className={styles.imageContainer}>
        <Image
          src={img}
          alt={imgAlt}
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
      <div className={styles.chatContainer}>
        <div className={styles.chatName}>{name}</div>
        <div className={styles.lastChat}>
          {lastChat.substring(0, showableLength) + contChat}
        </div>
      </div>
    </div>
  );
};

export default IconChatButton;
