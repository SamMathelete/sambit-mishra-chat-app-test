import styles from "./Footer.module.css";

const MessagesFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.messageBoxContainer}>
        <input className={styles.messageBox} placeholder="Message" />
      </div>
      <div className={styles.sendButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M17.4849 3.20696L7.70238 6.45696C1.12655 8.65613 1.12655 12.242 7.70238 14.4303L10.6057 15.3945L11.5699 18.2978C13.7582 24.8736 17.3549 24.8736 19.5432 18.2978L22.804 8.52613C24.2557 4.13862 21.8724 1.74446 17.4849 3.20696ZM17.8315 9.03529L13.7149 13.1736C13.5524 13.3361 13.3465 13.412 13.1407 13.412C12.9349 13.412 12.729 13.3361 12.5665 13.1736C12.2524 12.8595 12.2524 12.3395 12.5665 12.0253L16.6832 7.88696C16.9974 7.57279 17.5174 7.57279 17.8315 7.88696C18.1457 8.20113 18.1457 8.72113 17.8315 9.03529Z"
            fill="#050505"
          />
        </svg>
      </div>
    </div>
  );
};

export default MessagesFooter;
