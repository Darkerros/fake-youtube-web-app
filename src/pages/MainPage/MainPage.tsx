import React, {useEffect, useState} from 'react';
import styles from "./MainPage.module.css"
import Content from "../../components/Content/Content";
import {useAppSelector} from "../../hooks/redux/useAppSelector";
import {useAppDispatch} from "../../hooks/redux/useAppDispatch";
import {getFeedThunk} from "../../services/thunk/getFeedThunk";

const MainPage = () => {
    const dispatch = useAppDispatch()
    const videoList = useAppSelector(state => state.feed.items)

    useEffect(() => {
        dispatch(getFeedThunk({chart: "mostPopular"}))
    },[])

    return (
        <section className={styles.container}>
            <Content items={videoList}/>
        </section>
    );
};

export default MainPage;