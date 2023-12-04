import Image from "next/image";
import styles from "./Header.module.css";
import explore from "../../../assets/explore.png";
import create from "../../../assets/create.png";
import edit from "../../../assets/edit.png";
import { useAppDispatch } from "@/store/hooks";
import { modalActions } from "@/store/modal-slice";

const Header = () => {
  const dispatch = useAppDispatch();
  const drawerHandler = () => {
    dispatch(modalActions.toggleDrawer());
  };

  return (
    <header className={styles.header}>
      <div className={styles.menuBtn} onClick={drawerHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="21"
          viewBox="0 0 20 14"
          fill="none"
        >
          <path
            d="M0 0V2H20V0H0ZM0 6V8H20V6H0ZM0 12V14H20V12H0Z"
            fill="white"
          />
        </svg>
      </div>
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
              marginRight: "0.75rem",
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
              marginRight: "0.75rem",
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
              marginRight: "0.75rem",
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
