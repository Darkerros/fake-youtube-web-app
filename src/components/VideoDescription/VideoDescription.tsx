import React, {FC, memo, useCallback} from 'react';
import styles from './VideoDescription.module.css'

interface IProps {
    description: string
}

const VideoDescription:FC<IProps> = memo(({description}) => {
    const formatDescriptionLine = useCallback((text: string, key?: string | number) => {
        const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
        const url = text.match(urlRegex) as Array<string>
        if (url) {
            return <p key={key} className={styles.stroke}>{text.replace(url[0],"")} <a href={url[0]} style={{textDecoration: "none"}} target={"_blank"} rel="noreferrer">{url}</a></p>
        }
        return <p key={key} className={styles.stroke}>{text}</p>

    },[])

    return (
        <div className={styles.container}>
            {description.split("\n").map((line,index) => line ? formatDescriptionLine(line,index) : <br key={index}/>)}
        </div>
    );
});

export default VideoDescription;