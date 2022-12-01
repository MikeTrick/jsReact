import React from "react";
import Classes from './User.module.css';
import {usersActionCreators} from "../../../redux/actionCreators/users";


export const User = (props) => {

    // const follow = (userId, action) => {
    //
    // }

    return (
        <div className={Classes.users}>
            <div className={Classes.userWrapper}>
                <div className={Classes.userInterests}>
                    <div className={Classes.userInfo}>
                        <div>
                            <img src={props.photo} alt=""/>
                        </div>
                        <div>
                            <div>
                                {props.name}
                            </div>
                            <div>
                                {props.familyname}
                            </div>
                        </div>
                    </div>
                    {props.interests}
                </div>
                <div className={Classes.button}>
                    <button>Follow</button>
                </div>
            </div>
        </div>
    )
}