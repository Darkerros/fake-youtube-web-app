import React from 'react';
import styles from './Layout.module.css'
import {Outlet} from "react-router";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={styles.container}>
                <Menu/>
                <main className={styles.contentContainer}>
                    <Outlet/>
                </main>
            </div>
        </>
    );
};

export default Layout;