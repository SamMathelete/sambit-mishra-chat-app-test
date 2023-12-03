import MessagesHeader from "./Header";
import userImage1 from "../../../../assets/userImage1.png";
import MessagesFooter from "./Footer";
import MessagesBox from "./MessagesBox";
import { useAppSelector } from "@/store/hooks";

const Messages = () => {
  const activeContactState = useAppSelector((state) => state.contacts);
  const activeContact = activeContactState.contactList[activeContactState.current - 1];
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <MessagesHeader img={activeContact.img} name={activeContact.name} />
      <MessagesBox />
      <MessagesFooter />
    </div>
  );
};

export default Messages;
