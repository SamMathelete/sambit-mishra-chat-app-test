import { FC } from "react";
import styles from "./Message.module.css";
import Image, { StaticImageData } from "next/image";
import { useAppSelector } from "@/store/hooks";

interface Props {
  message: string;
  me: boolean;
  showImg: boolean;
  img: StaticImageData;
  first: boolean;
}

const Message: FC<Props> = ({ message, me, showImg, img, first }) => {
  return (
    <div
      className={`${styles.container} ${me && styles.meContainer} ${
        first && styles.firstChild
      }`}
    >
      <div className={styles.imageHolder}>
        {showImg && (
          <Image
            src={img}
            alt={me ? "me" : "sender"}
            style={{
              borderRadius: "50%",
            }}
          />
        )}
      </div>
      <div className={`${styles.message} ${me && styles.me}`}>{message}</div>
    </div>
  );
};

export default Message;
