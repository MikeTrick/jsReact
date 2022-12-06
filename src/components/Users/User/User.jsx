import React, {memo, useMemo} from "react";
import Classes from './User.module.css';
import {usersActionCreators} from "../../../redux/actionCreators/users";
import {useActions} from "../../../common/hooks/useActions";
import {usersActions} from "../../../redux/actions";


export const User = memo(({ id, followed, ...props }) => {

    const { follow, unfollow, setUsers } = useActions(usersActions);

    const followUser = () => follow(id);

    const buttonTitle = useMemo(() => followed ? 'UNFOLLOW' : 'FOLLOW', [followed])

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
                    <button onClick={followUser}>
                        {buttonTitle}
                    </button>
                </div>
            </div>
        </div>
    )
})
