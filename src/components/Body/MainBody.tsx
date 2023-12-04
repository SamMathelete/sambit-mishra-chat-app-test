import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Chats from "./Chats/Chats";
import styles from "./MainBody.module.css";
import Messages from "./Messages/Messages";
import { screenActions } from "@/store/screen-slice";
import { useEffect } from "react";

const MainBody = () => {
  const screenSize = useAppSelector((state) => state.screen.Dimensions);
  const showChat = useAppSelector((state) => state.screen.showChat);
  const showMessage = useAppSelector((state) => state.screen.showMessage);

  const dispatch = useAppDispatch();

  const getScreenDimensions = () => {
    if (window === undefined)
      return {
        width: 0,
        height: 0,
      };
    return {
      width: window!.innerWidth,
      height: window!.innerHeight,
    };
  };

  useEffect(() => {
    const currentSize = getScreenDimensions();
    dispatch(screenActions.changeScreenSize(currentSize));
    if (currentSize.width < 1000) {
      dispatch(screenActions.hideMessageScreen());
      dispatch(screenActions.showChatScreen());
    }
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const currentSize = getScreenDimensions();
      dispatch(screenActions.changeScreenSize(currentSize));
      if (currentSize.width < 1000) {
        dispatch(screenActions.hideMessageScreen());
        dispatch(screenActions.showChatScreen());
      } else {
        dispatch(screenActions.showMessageScreen());
        dispatch(screenActions.showChatScreen());
      }
    };
    window!.addEventListener("resize", updateDimensions);
    return () => window!.removeEventListener("resize", updateDimensions);
  }, [screenSize]);

  return (
    <div className={styles.container}>
      {showChat && (
        <div className={styles.chatsContainer}>
          <Chats />
        </div>
      )}
      {showMessage && (
        <div className={styles.messagesContainer}>
          <Messages />
        </div>
      )}
    </div>
  );
};

export default MainBody;
