import React from 'react';
import styles from './Menu.module.css'
import MenuItem from "../MenuItem/MenuItem";
import {useAppSelector} from "../../hooks/redux/useAppSelector";
import {superMenuStateSelector} from "../../services/selector/menuSelectors";

const Menu = () => {
    const menuState = useAppSelector(superMenuStateSelector)

    return (
        <nav className={`${styles.menu} ${menuState && styles.active}`}>
            <MenuItem to={"/"} icon={"HomeIcon"}>Главная</MenuItem>
            <MenuItem to={"/category/trend"} icon={"TrendIcon"}>В тренде</MenuItem>
            <MenuItem to={"/category/fashion"} icon={"HomeIcon"}>Мода</MenuItem>
            <MenuItem to={"/category/games"} icon={"GameIcon"}>Игры</MenuItem>
        </nav>
    );
};

export default Menu;