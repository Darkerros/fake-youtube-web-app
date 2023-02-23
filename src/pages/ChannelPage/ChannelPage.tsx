import React, {useEffect} from 'react';
import styles from './ChannelPage.module.css'
import {useParams} from "react-router";
import ChannelInfoSection from "../../components/ChannelInfoSection/ChannelInfoSection";
import ChannelContent from "../../components/ChannelContent/ChannelContent";
import {useAppSelector} from "../../hooks/redux/useAppSelector";
import {useAppDispatch} from "../../hooks/redux/useAppDispatch";
import {getChannelInfoThunk} from "../../services/thunk/getChannelInfoThunk";
import {searchVideoByChannelIdThunk} from "../../services/thunk/searchVideoByChannelIdThunk";
import {getChannelVideosInfoByIdListThunk} from "../../services/thunk/getChannelVideosInfoByIdListThunk";

const ChannelPage = () => {
    const {id} = useParams<{id:string}>()
    const dispatch = useAppDispatch()
    const channelInfo = useAppSelector(state => state.channel.data)
    const searchVideos = useAppSelector(state => state.searchChannelVideos.items)
    const channelVideo = useAppSelector(state => state.videosInformation.items)

    useEffect(() => {
        if (id) {
            dispatch(getChannelInfoThunk(id))
            dispatch(searchVideoByChannelIdThunk(id))
        }
        // eslint-disable-next-line
    },[id])

    useEffect(() => {
        if (searchVideos.length) {
            const videoIdList = searchVideos.map(video => video.id.videoId)
            dispatch(getChannelVideosInfoByIdListThunk({videoIdList: videoIdList}))
        }
        // eslint-disable-next-line
    },[searchVideos])

    return (
        <div className={styles.container}>
            <img className={styles.banner} src={channelInfo?.brandingSettings.image?.bannerExternalUrl+"=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"} alt=""/>
            {channelInfo && <ChannelInfoSection channelInfo={channelInfo}/>}
            {channelVideo && <ChannelContent items={channelVideo}/>}
        </div>
    );
};

export default ChannelPage;