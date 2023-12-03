import MessagesHeader from "./Header";
import MessagesFooter from "./Footer";
import MessagesBox from "./MessagesBox";
import { useAppSelector } from "@/store/hooks";

const Messages = () => {
  const activeContactID = useAppSelector((state) => state.contacts.current);
  const activeContactIndex = useAppSelector((state) =>
    state.contacts.contactList.findIndex((ele) => ele.id === activeContactID)
  );
  const activeContact = useAppSelector(
    (state) => state.contacts.contactList[activeContactIndex]
  );
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
