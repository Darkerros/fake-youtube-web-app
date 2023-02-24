import React, {FC, useCallback} from 'react';
import styles from './VideoCard.module.css'
import {Link} from "react-router-dom";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";

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
        <li className={styles.container}>
            <Link to={`/video/${videoInfo.id}`} className={styles.link}>
                <img className={styles.image} src={videoInfo.snippet.thumbnails.medium?.url} alt=""/>
            </Link>
            <div className={styles.baseVideoDetailsContainer}>
                <Link to={`/video/${videoInfo.id}`} className={styles.link}>
                    <h2 className={styles.title}>{videoInfo.snippet.title}</h2>
                </Link>
            </div>
            <div className={styles.additionalVideoDetailsContainer}>
                <Link to={`/channel/${videoInfo.snippet.channelId}`} className={`${styles.userLink} ${styles.link}`}>
                    <p className={styles.userName}>{videoInfo.snippet.channelTitle}</p>
                </Link>
                <p className={styles.viewCount}>{formateViewCount(videoInfo.statistics.viewCount)}</p>
            </div>
        </li>
    );
};

export default VideoCard;