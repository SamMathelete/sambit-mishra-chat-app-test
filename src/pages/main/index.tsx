import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./MainPage.module.css";
import MainBody from "@/components/Body/MainBody";

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Header />
            <MainBody />
            <Footer />
        </div>
    )
}

export default MainPage;