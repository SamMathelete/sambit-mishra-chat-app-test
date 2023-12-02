import Image from "next/image";
import styles from "./Header.module.css";
import explore from "../../../assets/explore.png";
import create from "../../../assets/create.png";
import edit from "../../../assets/edit.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.div1}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.vbar} />
        <div className={`${styles.iconText} ${styles.selected}`}>
          <Image
            src={explore}
            alt="explore"
            style={{
              width: "1.49369rem",
              height: "1.25313rem",
              flexShrink: 0,
              marginRight: "0.75rem"
            }}
          />
          Explore
        </div>
        <div className={styles.iconText}>
          <Image
            src={create}
            alt="create"
            style={{
              width: "1.49369rem",
              height: "1.25313rem",
              flexShrink: 0,
              marginRight: "0.75rem"
            }}
          />
          Create
        </div>
        <div className={styles.iconText}>
          <Image
            src={edit}
            alt="edit"
            style={{
              width: "1.49369rem",
              height: "1.25313rem",
              flexShrink: 0,
              marginRight: "0.75rem"
            }}
          />
          Edit
        </div>
      </div>
      <div className={styles.loginButton}>Login</div>
    </header>
  );
};

export default Header;
