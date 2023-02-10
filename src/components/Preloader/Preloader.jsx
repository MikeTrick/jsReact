import React from "react";
import Classes from './Preloader.module.css';
import preloader from "../ripple.svg";


export const Preloader = (props) => {

    return (
        <div className={Classes.content}>
                <img src={preloader} alt=""/>
        </div>
    )
}
