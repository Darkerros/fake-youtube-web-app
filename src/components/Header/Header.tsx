import React from 'react';
import styles from './Header.module.css'
import MenuButton from "../MenuButton/MenuButton";

const Header = () => {
    return (
        <header className={styles.header}>
            <MenuButton/>
        </header>
    );
};

export default Header;