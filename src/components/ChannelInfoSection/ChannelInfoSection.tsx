import React, {FC, memo} from 'react';
import styles from "./ChannelInfoSection.module.css";
import useViewsFormater from "../../hooks/useViewsFormater";
import FollowerIcon from "../../ui/icons/FollowerIcon/FollowerIcon";
import {ChannelResourceType} from "../../utils/types/api/resources/ChannelResourceType";

interface IProps {
    channelInfo: ChannelResourceType
}

const ChannelInfoSection:FC<IProps> = memo(({channelInfo}) => {
    const countFormater = useViewsFormater()

    return (
        <div className={styles.container}>
            <img className={styles.image} src={channelInfo.snippet.thumbnails.medium?.url} alt=""/>
            <div className={styles.infoContainer}>
                <p className={styles.channelName}>{channelInfo.snippet.title}</p>
                <p className={styles.nickname}>{channelInfo.snippet.customUrl}</p>
                <p className={styles.followerCount}><FollowerIcon className={styles.followerCountIcon}/>{countFormater(channelInfo.statistics.subscriberCount)} подписчиков</p>
            </div>
        </div>
    );
});

export default ChannelInfoSection;