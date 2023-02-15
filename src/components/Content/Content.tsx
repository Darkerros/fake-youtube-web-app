import React, {FC} from 'react';
import styles from './Content.module.css'
import {VideoResourceType} from "../../api/types/types";
import VideoCard from "../VideoCard/VideoCard";

interface IProps {
    items: VideoResourceType[]
}

const Content:FC<IProps> = ({items}) => {
    return (
        <div className={styles.container}>
            {items.map(videoInfo => <VideoCard key={videoInfo.id} videoInfo={videoInfo}/>)}
        </div>
    );
};

export default Content;