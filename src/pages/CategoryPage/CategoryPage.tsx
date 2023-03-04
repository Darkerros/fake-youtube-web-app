import React, {useEffect, useState} from 'react';
import styles from "./CategoryPage.module.css"
import Content from "../../components/Content/Content";
import {useParams} from "react-router";
import {api} from "../../api/api";
import {SearchVideoResourceType} from "../../utils/types/api/resources/SearchVideoResourceType";
import {useAppDispatch} from "../../hooks/redux/useAppDispatch";
import {getChannelVideosInfoByIdListThunk} from "../../services/thunk/getChannelVideosInfoByIdListThunk";
import {useAppSelector} from "../../hooks/redux/useAppSelector";

const CategoryPage = () => {
    const {type} = useParams<{type: string}>()
    const dispatch = useAppDispatch()
    const [searchVideoList,setSearchVideoList] = useState<SearchVideoResourceType[]>([])
    const videoList = useAppSelector(state => state.videosInformation.items)

    useEffect(() => {
        api.search({q: type, type: "video",order: "rating"}).then(data => setSearchVideoList(data.items as SearchVideoResourceType[]))
    },[type])

    useEffect(() => {
        if (searchVideoList.length) {
            const idList = searchVideoList.map((video) => video.id.videoId)
            dispatch(getChannelVideosInfoByIdListThunk({videoIdList: idList}))
        }

        // eslint-disable-next-line
    },[searchVideoList])

    return (
        <section className={styles.container}>
            {videoList && <Content items={videoList}/>}
        </section>
    );
};

export default CategoryPage;