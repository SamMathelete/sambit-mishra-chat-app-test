import Image from "next/image";
import telegram from "../../../assets/telegram.png";
import instagram from "../../../assets/instagram.png";
import x from "../../../assets/x.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.div2}>
        <div className={styles.contact}>Contact@00000000.tech</div>
        <div className={styles.social}>
          <Image
            src={telegram}
            alt="Telegram"
            style={{
              marginRight: "2rem",
            }}
          />
          <Image
            src={instagram}
            alt="Instagram"
            style={{
              marginRight: "2rem",
            }}
          />
          <Image
            src={x}
            alt="X"
            style={{
              marginRight: "2rem",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
