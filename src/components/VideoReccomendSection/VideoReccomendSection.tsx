import React, {FC} from 'react';
import styles from "./VideoReccomendSection.module.css";
import VideoRecommendCard from "../VideoRecommendCard/VideoRecommendCard";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";

interface IProps {
    videoList: VideoResourceType[]
}


const VideoReccomendSection:FC<IProps> = ({videoList}) => {
    return (
        <ul className={styles.container}>
            {videoList.map(videoInfo => <VideoRecommendCard videoInfo={videoInfo} key={videoInfo.id}/>)}
        </ul>
    );
};

export default VideoReccomendSection;