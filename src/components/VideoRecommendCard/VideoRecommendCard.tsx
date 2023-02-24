import React, {FC, memo} from 'react';
import styles from './VideoRecommendCard.module.css'
import useViewsFormater from "../../hooks/useViewsFormater";
import ViewIcon from "../../ui/icons/ViewIcon/ViewIcon";
import {Link} from "react-router-dom";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";

interface IProps {
    videoInfo: VideoResourceType
}

const VideoRecommendCard:FC<IProps> = memo(({videoInfo}) => {
    const formateView = useViewsFormater()

    return (
        <li className={styles.container}>
            <Link to={`/video/${videoInfo.id}`} className={styles.link}>
                <img className={styles.image} src={videoInfo.snippet.thumbnails.medium?.url} alt=""/>
            </Link>
            <div className={styles.infoContainer}>
                <Link to={`/video/${videoInfo.id}`} className={styles.link}>
                    <h3 className={styles.title}>{videoInfo.snippet.title}</h3>
                </Link>
                <Link to={`/channel/${videoInfo.snippet.channelId}`} className={styles.link}>
                    <p className={styles.channelName}>{videoInfo.snippet.channelTitle}</p>
                </Link>
                <p className={styles.viewCount}><ViewIcon className={styles.viewCountIcon}/>{formateView(videoInfo.statistics.viewCount)}</p>
            </div>
        </li>
    );
});

export default VideoRecommendCard;