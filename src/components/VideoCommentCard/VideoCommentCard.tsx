import React, {FC, memo, useCallback, useState} from 'react';
import styles from './VideoCommentCard.module.css'
import LikeIcon from "../../ui/icons/LikeIcon/LikeIcon";
import useViewsFormater from "../../hooks/useViewsFormater";
import {Link} from "react-router-dom";
import {CommentsThreadResourceType} from "../../utils/types/api/resources/CommentsThreadResourceType";

interface IProps {
    comment: CommentsThreadResourceType
}

const VideoCommentCard:FC<IProps> = memo(({comment}) => {
    const viewFormater = useViewsFormater()
    const [imageLoadFailState, setImageLoadFailState] = useState<boolean>(false)

    const handleImageLoadError = useCallback(() => setImageLoadFailState(true),[])
    const formatText = useCallback((text: string,lineClass?: string) => text.split("\n").map(line => <p className={lineClass}>{line}<br/></p>),[])

    return (
        <li className={styles.container}>
            <Link to={`/channel/${comment.snippet.topLevelComment.snippet.authorChannelId}`}  className={styles.link}>
                {imageLoadFailState ? <span className={styles.image}/> : <img className={styles.image} src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} onError={handleImageLoadError} alt=""/>}
            </Link>
            <div className={styles.infoContainer}>
                <div className={styles.baseInfoContainer}>
                    <Link to={`/channel/${comment.snippet.topLevelComment.snippet.authorChannelId.value}`} className={styles.link}>
                        <p className={styles.channelName}>{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                    </Link>
                    <p className={styles.likeCount}><LikeIcon className={styles.likeCountIcon}/>{viewFormater(comment.snippet.topLevelComment.snippet.likeCount)}</p>
                </div>
                <div className={styles.commentTextContainer}>
                    {formatText(comment.snippet.topLevelComment.snippet.textDisplay,styles.commentLine)}
                </div>
            </div>
        </li>
    );
});

export default VideoCommentCard;