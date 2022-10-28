import React from "react";
import Classes from './Header.module.css';
import CarLogo from '../Sedan-PNG-HD.png';

export const Header = () => {
    return (
        <header className={Classes.header}>
            <img src={CarLogo} alt=''
                 className={Classes.header.img}/>
        </header>
    )
}