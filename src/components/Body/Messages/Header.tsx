import Image, { StaticImageData } from "next/image";
import styles from "./Header.module.css";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { contactsActions } from "@/store/contact-slice";
import { screenActions } from "@/store/screen-slice";

interface Props {
  img: StaticImageData;
  name: string;
}

const MessagesHeader: FC<Props> = ({ img, name }) => {
  const dispatch = useAppDispatch();
  const screenSize = useAppSelector((state) => state.screen.Dimensions);

  const backHandler = () => {
    dispatch(contactsActions.back());
  };

  const deleteHandler = () => {
    dispatch(contactsActions.delete());
    if (screenSize.width < 1000) {
      dispatch(screenActions.hideMessageScreen());
      dispatch(screenActions.showChatScreen());
    }
  };

  const backToChatHandler = () => {
    dispatch(screenActions.toggleLastState());
    dispatch(screenActions.hideMessageScreen());
    dispatch(screenActions.showChatScreen());
  };

  return (
    <div className={styles.header}>
      <div className={styles.backToChat} onClick={backToChatHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="20"
          viewBox="0 0 18 30"
          fill="none"
        >
          <path
            d="M17.625 3.53594L14.723 0.625L0.375 15L14.723 29.375L17.625 26.4641L6.18789 15L17.625 3.53594Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={styles.imageTextContainer}>
        <Image
          src={img}
          alt={name}
          style={{
            borderRadius: "50%",
            marginRight: "1rem",
            marginLeft: "1rem",
          }}
        />
        {name}
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.textButton} onClick={backHandler}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1_105)">
                <path
                  d="M10.4766 0.0703354C8.31093 0.351585 6.32812 1.18127 4.59375 2.5219C4.04531 2.94846 3.1125 3.86721 2.65781 4.42971C1.36406 6.03284 0.506246 7.92659 0.140621 9.98909C0.00937094 10.7203 -0.0421916 12.4781 0.0421834 13.2797C0.243746 15.15 0.895308 16.9828 1.90781 18.5391C2.36718 19.2422 2.77031 19.7438 3.39843 20.386C5.3625 22.4016 7.84218 23.6203 10.6641 23.9485C11.2922 24.0235 12.8203 24.0094 13.5 23.9297C17.0062 23.4938 20.1375 21.5297 22.0922 18.5391C23.0766 17.0344 23.7047 15.3047 23.9297 13.5C24.0234 12.7406 24.0234 11.2641 23.9297 10.5C23.4984 7.0219 21.5391 3.88127 18.5859 1.94065C17.0437 0.928148 15.3281 0.300022 13.5 0.0703354C12.7875 -0.01404 11.1516 -0.01404 10.4766 0.0703354ZM9.89062 8.02502C10.1437 8.15627 10.2656 8.31565 10.2984 8.56877C10.3594 9.0094 10.3406 9.03284 9.22031 10.1578L8.18437 11.2031L13.0828 11.2125C17.625 11.2266 17.9859 11.2313 18.1266 11.3063C18.3609 11.4375 18.4828 11.6485 18.5062 11.9625C18.525 12.1969 18.5109 12.2625 18.4078 12.4172C18.3422 12.5156 18.2109 12.6328 18.1078 12.6844C17.9391 12.7688 17.7281 12.7735 13.0641 12.7969L8.20312 12.8203L9.16875 13.7813C9.69843 14.311 10.1719 14.8219 10.2234 14.9156C10.3406 15.1453 10.3406 15.4922 10.2187 15.6938C10.0359 15.9891 9.65156 16.1344 9.31406 16.0313C9.15 15.9844 8.84531 15.7031 7.39218 14.2594C6.44062 13.3125 5.625 12.4594 5.57343 12.3656C5.475 12.1735 5.45625 11.8875 5.53593 11.686C5.60625 11.4891 8.98125 8.11877 9.21093 8.01096C9.45937 7.89377 9.6375 7.89846 9.89062 8.02502Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_105">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.text}>Back</div>
        </div>
        <div className={styles.textButton} onClick={deleteHandler}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.63281 2.04376C9.23906 2.18907 9 2.55001 9 3.00001C9 3.46876 9.27188 3.84845 9.69844 3.9797C9.94688 4.0547 14.0531 4.0547 14.3016 3.9797C14.7281 3.84845 15 3.46876 15 3.00001C15 2.54064 14.7609 2.18439 14.3484 2.03907C14.0531 1.93595 9.91875 1.94064 9.63281 2.04376Z"
                fill="white"
              />
              <path
                d="M2.70938 5.01563C2.46563 5.09063 2.25 5.25938 2.11875 5.475C2.01562 5.65313 1.99219 5.75157 1.99219 6C1.99219 6.39844 2.15156 6.68907 2.475 6.87657L2.69531 7.00782L3.82969 7.02188L4.96875 7.03594L4.97813 13.3031L4.99219 19.5703L5.11875 19.9266C5.40469 20.7328 5.90156 21.3188 6.61406 21.6797C7.29844 22.0266 6.95625 22.0078 12 22.0078C16.2516 22.0078 16.5422 22.0031 16.8047 21.9234C17.8313 21.6094 18.5625 20.8828 18.9188 19.8281C19.0031 19.5844 19.0078 19.2656 19.0219 13.3031L19.0312 7.03594L20.1703 7.02188C21.4031 7.00782 21.4406 6.99844 21.7219 6.72188C21.9375 6.50625 22.0031 6.33282 22.0078 6C22.0078 5.60157 21.8484 5.31094 21.525 5.12344L21.3047 4.99219L12.0703 4.98282C6.98906 4.97813 2.77969 4.99219 2.70938 5.01563ZM10.35 10.1063C10.5797 10.2 10.7719 10.3875 10.8797 10.6172C10.9594 10.7906 10.9688 10.9734 10.9688 13.5C10.9688 16.5188 10.9781 16.4109 10.6266 16.7203C10.1438 17.1422 9.44063 17.0063 9.14531 16.4297L9.02344 16.2L9.00938 13.6781C9 12.0563 9.01406 11.0578 9.04688 10.8844C9.16406 10.2281 9.77344 9.8625 10.35 10.1063ZM14.5406 10.2C14.6578 10.2797 14.7844 10.4297 14.8547 10.5703L14.9766 10.8V13.5V16.2L14.8547 16.4297C14.5594 17.0063 13.8563 17.1422 13.3734 16.7203C13.0219 16.4109 13.0312 16.5141 13.0312 13.5094C13.0312 10.5797 13.0266 10.6359 13.3031 10.3406C13.6266 9.99844 14.1656 9.9375 14.5406 10.2Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={styles.text}>Delete</div>
        </div>
      </div>
    </div>
  );
};

export default MessagesHeader;
