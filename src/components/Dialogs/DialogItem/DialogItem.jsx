import React from "react";

import Classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={`${Classes.dialog} + '' + ${Classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
