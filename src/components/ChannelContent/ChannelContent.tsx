import React, {FC} from 'react';
import styles from './ChannelContent.module.css'
import VideoCard from "../VideoCard/VideoCard";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";

interface IProps {
    items: VideoResourceType[]
}

const ChannelContent:FC<IProps> = ({items}) => {
    return (
        <div className={styles.container}>
            {items.map(videoInfo => <VideoCard key={videoInfo.id} videoInfo={videoInfo}/>)}
        </div>
    );
};

export default ChannelContent;