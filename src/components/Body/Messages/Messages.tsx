import MessagesHeader from "./Header";
import userImage1 from "../../../../assets/userImage1.png";
import MessagesFooter from "./Footer";
import MessagesBox from "./MessagesBox";

const Messages = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <MessagesHeader img={userImage1} name="Caressa Jesalin" />
      <MessagesBox />
      <MessagesFooter />
    </div>
  );
};

export default Messages;
