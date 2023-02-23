import {useEffect} from 'react';
import styles from './VideoPage.module.css'
import {useParams} from "react-router";
import ReactPlayer from "react-player";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoContentDetails from "../../components/VideoContentDetails/VideoContentDetails";
import VideoRecommendCard from "../../components/VideoRecommendCard/VideoRecommendCard";
import VideoCommentsSection from "../../components/VideoCommentsSection/VideoCommentsSection";
import {useAppDispatch} from "../../hooks/redux/useAppDispatch";
import {getChannelInfoThunk} from "../../services/thunk/getChannelInfoThunk";
import {useAppSelector} from "../../hooks/redux/useAppSelector";
import {getVideoByIdThunk} from "../../services/thunk/getVideoByIdThunk";
import {getRecomendVideoByCategoryIdThunk} from "../../services/thunk/getRecomendVideoByCategoryIdThunk";

const VideoPage = () => {
    const dispatch = useAppDispatch()
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

    return (
        <section className={styles.container}>
            <div className={styles.videoContentContainer}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoInfo?.id}`} controls={true} width={"100%"} height={"600px"} style={{borderRadius: "10px", overflow: "hidden"}}/>
                <h2 className={styles.title}>{videoInfo?.snippet.title}</h2>
                {videoInfo && channelInfo && <VideoContentDetails videoInfo={videoInfo} channelInfo={channelInfo}/>}
                {videoInfo && videoInfo.snippet.description && <VideoDescription description={videoInfo.snippet.description}/>}
                {id && <VideoCommentsSection videoId={id}/>}
            </div>
            <div className={styles.recommendationContainer}>
                {recommendVideoList.map(videoInfo => <VideoRecommendCard videoInfo={videoInfo} key={videoInfo.id}/>)}
            </div>
        </section>
    );
};

export default VideoPage;
