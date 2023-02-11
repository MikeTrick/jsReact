import React from "react";

import Classes from '../Dialogs.module.css'

export const Message = (props) => {
    return (
        <div className={Classes.message}>
            {props.message}
        </div>
    )
}
