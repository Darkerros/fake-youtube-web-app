import styles from './App.module.css'
import {Route, Routes} from "react-router";
import Layout from "../Layout/Layout";
import MainPage from "../../pages/MainPage/MainPage";
import VideoPage from "../../pages/VideoPage/VideoPage";
import ChannelPage from "../../pages/ChannelPage/ChannelPage";
import CategoryPage from "../../pages/CategoryPage/CategoryPage";

function App() {

    return (
        <div className={`${styles.app} ${styles.app_theme_dark}`}>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path={"channel/:id"} element={<ChannelPage/>}/>
                    <Route path={"video/:id"} element={<VideoPage/>}/>
                    <Route path={"category/:type"} element={<CategoryPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
