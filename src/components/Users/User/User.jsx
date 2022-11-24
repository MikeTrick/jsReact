import React from "react";
import Classes from './User.module.css';


export const User = (props) => {

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
                                {props.familyName}
                            </div>
                        </div>
                    </div>
                    {props.interests}
                </div>
                <div className={Classes.button}>
                    <button>Follow/unfollow</button>
                </div>
            </div>
        </div>
    )
}