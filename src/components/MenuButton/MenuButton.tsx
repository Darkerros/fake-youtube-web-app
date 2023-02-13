import React from 'react';
import MenuIcon from "../../ui/icons/MenuIcon/MenuIcon";
import styles from './MenuButton.module.css'

const MenuButton = () => {
    return (
        <button className={styles.menuButton}>
            <MenuIcon className={styles.menuIcon}/>
        </button>
    );
};

export default MenuButton;