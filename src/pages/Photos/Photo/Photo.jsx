import React from "react";
import Classes from './Photo.module.css'


export const Photo = (props) => {
    return (
        <div className={Classes.photo}>
            <div>
                <img src={props.src} alt=""/>
            </div>
        </div>
    )
}
