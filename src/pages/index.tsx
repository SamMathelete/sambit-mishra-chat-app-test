import { useAppSelector } from "@/store/hooks";
import MainPage from "./main";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const showModal = useAppSelector((state) => state.modal.showModal);
  return (
    <>
      {showModal && <Modal />}
      <MainPage />
    </>
  );
}
