import React, {useCallback} from 'react';
import MenuIcon from "../../ui/icons/MenuIcon/MenuIcon";
import styles from './MenuButton.module.css'
import {useAppDispatch} from "../../hooks/redux/useAppDispatch";
import {menuActions} from "../../services/reducers/muneReducer";

const MenuButton = () => {
    const dispatch = useAppDispatch()
    // eslint-disable-next-line
    const handleClick = useCallback(() => dispatch(menuActions.togleMenu()),[])

    return (
        <button className={styles.menuButton} onClick={handleClick}>
            <MenuIcon className={styles.menuIcon}/>
        </button>
    );
};

export default MenuButton;