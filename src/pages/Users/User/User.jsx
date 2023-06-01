import React, {memo, useMemo} from "react";

import Classes from './User.module.css';
import {useActions} from "../../../common/hooks/useActions";
import {usersActions} from "../../../redux/actions";
import {NavLink} from "react-router-dom";

export const User = memo(({id, followed, ...props}) => {


    const {follow, unfollow} = useActions(usersActions);

    const followUser = () => follow(id)
    const unfollowUser = () => unfollow(id);


    const onFollowButtonClick = () => {
        if (followed === true) {
            unfollowUser();
        } else followUser();
    }

    const buttonTitle = useMemo(() => followed ? 'UNFOLLOW' : 'FOLLOW', [followed])

    return (
        <div>
            <div className={Classes.users}>

                <div className={Classes.userWrapper}>
                    <div className={Classes.userInterests}>
                        <div className={Classes.userInfo}>
                            <div>
                                <NavLink to={`/profile/${id}`}>
                                    <img src={props.photos.small} alt=""/>
                                </NavLink>
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
                        <button onClick={onFollowButtonClick}>
                            {buttonTitle}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
})
