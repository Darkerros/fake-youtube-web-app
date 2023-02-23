import React, {FC, memo, useCallback} from 'react';
import styles from './MenuItem.module.css'
import {NavLink} from "react-router-dom";
import HomeIcon from "../../ui/icons/HomeIcon/HomeIcon";
import {useAppSelector} from "../../hooks/redux/useAppSelector";
import {superMenuStateSelector} from "../../services/selector/menuSelectors";
import FireIcon from "../../ui/icons/FireIcon/FireIcon";
import GameIcon from "../../ui/icons/GameIcon/GameIcon";

type iconType = "HomeIcon" | "GameIcon" | "TrendIcon"

interface IProps {
    to: string
    children: string

    icon: iconType
}

const MenuItem: FC<IProps> = memo(({to, children, icon}) => {
    const menuState = useAppSelector(superMenuStateSelector)

    const getIcon = useCallback((icon: iconType) => {
        switch (icon) {
            case "TrendIcon":
                return <FireIcon className={styles.icon}/>

            case "GameIcon":
                return <GameIcon className={styles.icon}/>

            default:
                return <HomeIcon className={styles.icon}/>
        }
    }, [])
    const generateClassName = useCallback((isActive: boolean) => isActive ? `${styles.link} ${styles.active} ${menuState && styles.menuActive}` : `${styles.link} ${menuState && styles.menuActive}`, [menuState])

    return (
        <NavLink to={to} className={({isActive}) => generateClassName(isActive)}>
            {getIcon(icon)}
            <p className={menuState ? `${styles.text} ${styles.textMenuActive}` : `${styles.text}`}>{children}</p>
        </NavLink>
    );
});

export default MenuItem;