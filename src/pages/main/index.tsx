import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import styles from "./MainPage.module.css";

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Header />
            <Footer />
        </div>
    )
}

export default MainPage;