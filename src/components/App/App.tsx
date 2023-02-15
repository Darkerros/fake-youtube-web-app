import styles from './App.module.css'
import {Route, Routes} from "react-router";
import Layout from "../Layout/Layout";
import MainPage from "../../pages/MainPage/MainPage";
import VideoPage from "../../pages/VideoPage/VideoPage";

function App() {

    return (
        <div className={`${styles.app} ${styles.app_theme_light}`}>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path={"channel/:id"} element={<MainPage/>}/>
                    <Route path={"video/:id"} element={<VideoPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
