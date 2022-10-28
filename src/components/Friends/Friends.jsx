import React from "react";
import Classes from './Friends.module.css';


export const Friends = (props) => {

    return (
        <div className={Classes.friends_wrapper}>
            <div>

                <img src={props.photo} alt=""/>
            </div>
            <div>
                {props.name}
            </div>
            <div>
                {props.familyName}
            </div>
        </div>
    )
}