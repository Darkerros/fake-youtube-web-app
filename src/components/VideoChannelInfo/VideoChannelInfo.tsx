import React, {FC, useCallback, useState} from 'react';
import styles from "./VideoChannelInfo.module.css";
import FollowerIcon from "../../ui/icons/FollowerIcon/FollowerIcon";
import {ChannelResourceType} from "../../utils/types/api/resources/ChannelResourceType";

interface IProps {
    channelInfo: ChannelResourceType
}

const VideoChannelInfo:FC<IProps> = ({channelInfo}) => {
    const [loadErrorImageState,setLoadErrorImageState] = useState<boolean>(false)

    const formatCount = useCallback((count: number) => {
        if (count > 10000000) return `${Math.round(count / 1000000)} млн`
        else if (count > 1000000) return `${(count / 1000000).toFixed(2)} млн`
        else if (count > 1000) return `${Math.round(count / 1000)} тыс.`
        return `${count}`
    }, [])
    const handleErrorLoadUserImage = useCallback(() => setLoadErrorImageState(true),[])

    return (
        <div className={styles.container}>
            {loadErrorImageState ? <span className={styles.userImage}/> : <img className={styles.userImage} src={channelInfo?.snippet.thumbnails.medium?.url} onError={handleErrorLoadUserImage} alt=""/>}
            <div className={styles.baseInfoContainer}>
                <p className={styles.userName}>{channelInfo.snippet.title}</p>
                {channelInfo?.statistics.subscriberCount && <p className={styles.userSubscribers}><FollowerIcon className={styles.userSubscribersIcon}/>{formatCount(channelInfo?.statistics.subscriberCount)}</p>}
            </div>
        </div>
    );
};

export default VideoChannelInfo;