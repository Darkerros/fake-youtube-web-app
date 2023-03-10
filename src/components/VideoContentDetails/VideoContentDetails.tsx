import {FC, useCallback} from 'react';
import styles from "./VideoContentDetails.module.css";
import LikeIcon from "../../ui/icons/LikeIcon/LikeIcon";
import ViewIcon from "../../ui/icons/ViewIcon/ViewIcon";
import VideoChannelInfo from "../VideoChannelInfo/VideoChannelInfo";
import {VideoResourceType} from "../../utils/types/api/resources/VideoResourceType";
import {ChannelResourceType} from "../../utils/types/api/resources/ChannelResourceType";

interface IProps {
    videoInfo: VideoResourceType,
    channelInfo: ChannelResourceType
}

const VideoContentDetails:FC<IProps> = ({videoInfo,channelInfo}) => {
    const formatCount = useCallback((count: number) => {
        if (count > 10000000) return `${Math.round(count / 1000000)} млн`
        else if (count > 1000000) return `${(count / 1000000).toFixed(2)} млн`
        else if (count > 1000) return `${Math.round(count / 1000)} тыс.`
        return `${count}`
    }, [])

    return (
        <div className={styles.container}>
            <VideoChannelInfo channelInfo={channelInfo}/>
            <div className={styles.videoAdditionalDetailsContainer}>
                {videoInfo?.statistics.likeCount && <p className={styles.likeCount}><LikeIcon className={styles.icon}/>{formatCount(videoInfo?.statistics.likeCount)}</p>}
                {videoInfo?.statistics.viewCount && <p className={styles.viewCount}><ViewIcon className={styles.icon}/>{formatCount(videoInfo?.statistics.viewCount)}</p>}
            </div>
        </div>
    );
};

export default VideoContentDetails;