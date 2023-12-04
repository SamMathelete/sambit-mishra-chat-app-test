import { contactsActions } from "@/store/contact-slice";
import { useAppDispatch } from "@/store/hooks";
import { modalActions } from "@/store/modal-slice";
import { useRef } from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  const dispatch = useAppDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const submitHandler = () => {
    const name = nameRef.current?.value;
    if (name === null || name?.length === 0) {
      alert("Name cannot be empty");
      return;
    }
    dispatch(contactsActions.addContact(name!));
    dispatch(modalActions.toggleModal());
  };
  const cancelHandler = () => {
    dispatch(modalActions.toggleModal());
  };
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHead}>Create new bot</div>
        <div className={styles.lowerCover}>
          <label htmlFor="name" className={styles.inputLabel}>
            Name of Bot
          </label>
          <input
            className={styles.nameInput}
            id="name"
            placeholder="Name"
            ref={nameRef}
          />
          <div className={styles.controls}>
            <button className={styles.cancelButton} onClick={cancelHandler}>
              Cancel
            </button>
            <button className={styles.submitButton} onClick={submitHandler}>
              Create Bot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
