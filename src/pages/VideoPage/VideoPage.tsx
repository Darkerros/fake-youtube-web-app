import {useEffect, useState} from 'react';
import styles from './VideoPage.module.css'
import {useParams} from "react-router";
import ReactPlayer from "react-player";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoContentDetails from "../../components/VideoContentDetails/VideoContentDetails";
import VideoCommentsSection from "../../components/VideoCommentsSection/VideoCommentsSection";
import {useAppDispatch} from "../../hooks/redux/useAppDispatch";
import {getChannelInfoThunk} from "../../services/thunk/getChannelInfoThunk";
import {useAppSelector} from "../../hooks/redux/useAppSelector";
import {getVideoByIdThunk} from "../../services/thunk/getVideoByIdThunk";
import {getRecomendVideoByCategoryIdThunk} from "../../services/thunk/getRecomendVideoByCategoryIdThunk";
import VideoReccomendSection from "../../components/VideoReccomendSection/VideoReccomendSection";

const VideoPage = () => {
    const dispatch = useAppDispatch()
    const [currentWith,setCurrentWith] = useState(window.screen.width)
    const {id} = useParams<{ id: string }>()
    const channelInfo = useAppSelector(state => state.channel.data)
    const videoInfo = useAppSelector(state => state.video.data)
    const recommendVideoList = useAppSelector(state => state.recomendVideos.items)

    useEffect(() => {
        if ((id && !videoInfo) || (id && videoInfo?.id !== id)) {
            dispatch(getVideoByIdThunk(id))
        }
    }, [id])

    useEffect(() => {
        if ((videoInfo && !channelInfo) || (videoInfo && channelInfo?.id !== videoInfo.snippet.channelId)) {
            dispatch(getChannelInfoThunk(videoInfo.snippet.channelId))
            dispatch(getRecomendVideoByCategoryIdThunk(videoInfo.snippet.categoryId))
        }
    }, [videoInfo])

    useEffect(() => {
        const handelResize = () => setCurrentWith(window.screen.width)

        window.addEventListener("resize", handelResize);

        return () => window.removeEventListener("resize", handelResize);
    },[])

    return (
        <section className={styles.container}>
            <div className={styles.videoContentContainer}>
                <div className={styles.player}>
                    <ReactPlayer  url={`https://www.youtube.com/watch?v=${videoInfo?.id}`} width={"100%"} height={"100%"} controls={true}/>
                </div>
                <h2 className={styles.title}>{videoInfo?.snippet.title}</h2>
                {videoInfo && channelInfo && <VideoContentDetails videoInfo={videoInfo} channelInfo={channelInfo}/>}
                {videoInfo && videoInfo.snippet.description && <VideoDescription description={videoInfo.snippet.description}/>}
                {currentWith <= 1280 && recommendVideoList &&  <VideoReccomendSection videoList={recommendVideoList}/>}
                {id && <VideoCommentsSection videoId={id}/>}
            </div>
            {currentWith > 1366 && recommendVideoList && <VideoReccomendSection videoList={recommendVideoList}/>}
        </section>
    );
};

export default VideoPage;
