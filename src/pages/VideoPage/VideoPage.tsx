import {useEffect, useState} from 'react';
import styles from './VideoPage.module.css'
import {useParams} from "react-router";
import {api} from "../../api/api";
import {ChannelResourceType, VideoResourceType} from "../../api/types/types";
import ReactPlayer from "react-player";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoContentDetails from "../../components/VideoContentDetails/VideoContentDetails";

const VideoPage = () => {
    const {id} = useParams<{ id: string }>()
    const [videoInfo, setVideoInfo] = useState<VideoResourceType | null>(null)
    const [channelInfo, setchannelInfo] = useState<ChannelResourceType | null>(null)

    useEffect(() => {
        if (id && !videoInfo) {
            api.getVideoById(id).then(data => setVideoInfo(data.items[0]))
        }
    }, [])

    useEffect(() => {
        if (videoInfo && !channelInfo) {
            api.channel(videoInfo.snippet.channelId).then(data => setchannelInfo(data.items[0]))
        }
    },[videoInfo])

    console.log(videoInfo,channelInfo)

    return (
        <main className={styles.container}>
            <div className={styles.videoContentContainer}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoInfo?.id}`} controls={true} width={"100%"} height={"600px"} style={{borderRadius: "10px", overflow: "hidden"}}/>
                <h2 className={styles.title}>{videoInfo?.snippet.title}</h2>
                {videoInfo && channelInfo && <VideoContentDetails videoInfo={videoInfo} channelInfo={channelInfo}/>}
                {videoInfo && <VideoDescription description={videoInfo.snippet.description}/>}
            </div>
            <div className={styles.recommendationContainer}>

            </div>
        </main>
    );
};

export default VideoPage;