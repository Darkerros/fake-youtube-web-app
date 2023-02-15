import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {api} from "../../api/api";
import {VideoResourceType} from "../../api/types/types";
import ReactPlayer from "react-player";

const VideoPage = () => {
    const {id} = useParams<{id:string}>()
    const [videoInfo,setVideoInfo] = useState<VideoResourceType>()

    useEffect(() => {
        if (id) {
            api.getVideoById(id).then(data => setVideoInfo(data.items[0]))
        }
    },[])

    console.log(videoInfo)

    return (
        <div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoInfo?.id}`} controls={true}/>
        </div>
    );
};

export default VideoPage;