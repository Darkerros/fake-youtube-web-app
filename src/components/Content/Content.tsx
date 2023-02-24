import React, {FC} from 'react';
import styles from './Content.module.css'
import VideoCard from "../VideoCard/VideoCard";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";

interface IProps {
    items: VideoResourceType[]
}

const Content:FC<IProps> = ({items}) => {
    return (
        <ul className={styles.container}>
            {items.map(videoInfo => <VideoCard key={videoInfo.id} videoInfo={videoInfo}/>)}
        </ul>
    );
};

export default Content;