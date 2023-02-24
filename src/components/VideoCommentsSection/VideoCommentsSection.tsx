import React, {FC, memo, useEffect, useState} from 'react';
import styles from './VideoCommentsSection.module.css'
import {api} from "../../api/api";
import VideoCommentCard from "../VideoCommentCard/VideoCommentCard";
import {CommentsThreadResourceType} from "../../utils/types/api/resources/CommentsThreadResourceType";

interface IProps {
    videoId: string
}

const VideoCommentsSection: FC<IProps> = memo(({videoId}) => {
    const [commentsList, setCommentsList] = useState<CommentsThreadResourceType[]>([])

    useEffect(() => {
        api.getVideoCommentsByVideoId(videoId).then((date) => setCommentsList(date.items))
    }, [videoId])

    return (
        <div className={styles.container}>
            <p className={styles.title}>Комментарии:</p>
            <ul className={styles.commentContainer}>
                {commentsList.map(comment => <VideoCommentCard comment={comment} key={comment.id}/>)}
            </ul>
        </div>
    );
});

export default VideoCommentsSection;