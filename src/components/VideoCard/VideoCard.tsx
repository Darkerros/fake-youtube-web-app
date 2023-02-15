import React, {FC, useCallback} from 'react';
import styles from './VideoCard.module.css'
import {VideoResourceType} from "../../api/types/types";

interface IProps {
    videoInfo:  VideoResourceType
}

const VideoCard:FC<IProps> = ({videoInfo}) => {
    const formateViewCount = useCallback((viewCount: number) => {
        if (viewCount > 10000000) {
            return `${Math.round(viewCount/1000000)} млн просмотров`
        }
        if (viewCount > 1000000) {
            return `${(viewCount/1000000).toFixed(1)} млн просмотров`
        }
        if (viewCount < 1000000 && viewCount > 1000) {
            return `${Math.round(viewCount/1000)} тыс. просмотров`
        }
        return `${viewCount} просмотров`

    },[])

    return (
        <div className={styles.container}>
            <img className={styles.image} src={videoInfo.snippet.thumbnails.medium?.url} alt=""/>
            <div className={styles.baseVideoDetailsContainer}>
                {false ? <img className={styles.userImage} src="" alt=""/> : <span className={styles.userImage}/>}
                <h2 className={styles.title}>{videoInfo.snippet.title}</h2>
            </div>
            <div className={styles.additionalVideoDetailsContainer}>
                <p className={styles.userName}>{videoInfo.snippet.channelTitle}</p>
                <p className={styles.viewCount}>{formateViewCount(videoInfo.statistics.viewCount)}</p>
            </div>
        </div>
    );
};

export default VideoCard;