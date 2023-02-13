import React, {FC} from 'react';


interface IProps {
    className?: string
}


const MenuIcon:FC<IProps> = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className={className}><path  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
    );
};

export default MenuIcon;