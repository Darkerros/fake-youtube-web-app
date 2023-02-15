import React, {useEffect, useState} from 'react';
import styles from "./MainPage.module.css"
import Content from "../../components/Content/Content";
import {VideoResourceType} from "../../api/types/types";
import {api} from "../../api/api";

const MainPage = () => {
    const [videoList, setVideoList] = useState<VideoResourceType[]>([])

    useEffect(() => {
        api.videos(["snippet","id","statistics"]).then(data => setVideoList(data.items))
    },[])

    return (
        <main className={styles.container}>
            <Content items={videoList}/>
        </main>
    );
};

export default MainPage;