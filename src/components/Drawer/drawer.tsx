import Image from "next/image";
import styles from "./drawer.module.css";
import explore from "../../../assets/explore.png";
import create from "../../../assets/create.png";
import edit from "../../../assets/edit.png";
import { useAppDispatch } from "@/store/hooks";
import { modalActions } from "@/store/modal-slice";

const Drawer = () => {
  const dispatch = useAppDispatch();
  const closeHandler = () => {
    dispatch(modalActions.toggleDrawer());
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.drawer}>
        <div className={styles.closeButton} onClick={closeHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 38 38"
            fill="none"
          >
            <path
              d="M1.71875 0.28125L0.28125 1.71875L17.5625 19L0.28125 36.2812L1.71875 37.7188L19 20.4375L36.2812 37.7188L37.7188 36.2812L20.4375 19L37.7188 1.71875L36.2812 0.28125L19 17.5625L1.71875 0.28125Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.controls}>
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
      </div>
    </div>
  );
};

export default Drawer;
