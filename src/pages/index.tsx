import { useAppSelector } from "@/store/hooks";
import MainPage from "./main";
import Modal from "@/components/Modal/Modal";
import Drawer from "@/components/Drawer/drawer";

export default function Home() {
  const showModal = useAppSelector((state) => state.modal.showModal);
  const showDrawer = useAppSelector((state) => state.modal.showDrawer);
  return (
    <>
      {showDrawer && <Drawer />}
      {showModal && <Modal />}
      <MainPage />
    </>
  );
}
