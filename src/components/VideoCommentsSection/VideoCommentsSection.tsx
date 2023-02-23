import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import styles from './VideoCommentsSection.module.css'
import {api} from "../../api/api";
import VideoCommentCard from "../VideoCommentCard/VideoCommentCard";
import {CommentsThreadResourceType} from "../../utils/types/api/resources/CommentsThreadResourceType";

interface IProps {
    videoId: string
}

const VideoCommentsSection: FC<IProps> = memo(({videoId}) => {
    const [commentsList, setCommentsList] = useState<CommentsThreadResourceType[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleToogleState = useCallback(() => setIsOpen(prev => !prev), [])

    useEffect(() => {
        api.getVideoCommentsByVideoId(videoId).then((date) => setCommentsList(date.items))
    }, [videoId])

    return (
        <div className={styles.container}>
            <p className={styles.title}>Комментарии:</p>
            <div className={isOpen ? `${styles.commentContainer} ${styles.open}` : `${styles.commentContainer}`}>
                {commentsList.map(comment => <VideoCommentCard comment={comment}/>)}
            </div>
            <button onClick={handleToogleState}>{isOpen ? "Свернуть" : "Развернуть"}</button>
        </div>
    );
});

export default VideoCommentsSection;