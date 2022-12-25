import React, {memo, useMemo} from "react";
import Classes from './User.module.css';
import {useActions} from "../../../common/hooks/useActions";
import {usersActions} from "../../../redux/actions";


export const User = memo(({id, followed, ...props}) => {


    const {follow, unfollow} = useActions(usersActions);
    // if (props.users.length === 0) {
    //
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //
    //     })
    //     setUsers([
    //         // {
    //         //     id: 1,
    //         //     name: 'Your',
    //         //     familyName: 'Photographer',
    //         //     photo: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
    //         //     interests: 'photography',
    //         //     followed: true,
    //         // },
    //         // {
    //         //     id: 2,
    //         //     name: 'Your',
    //         //     familyName: 'Photographer',
    //         //     photo: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
    //         //     interests: 'photography',
    //         //     followed: false,
    //         // },
    //         // {
    //         //     id: 3,
    //         //     name: 'Your',
    //         //     familyName: 'Photographer',
    //         //     photo: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
    //         //     interests: 'photography',
    //         //     followed: true,
    //         // },
    //         // {
    //         //     id: 4,
    //         //     name: 'Your',
    //         //     familyName: 'Photographer',
    //         //     photo: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
    //         //     interests: 'photography',
    //         //     followed: false,
    //         // },
    //     ],)
    // }


    const followUser = () => follow(id)
    const unfollowUser = () => unfollow(id);


    // setUsers([
    //     // {
    //     //     id: 1,
    //     //     name: 'Your',
    //     //     familyName: 'Photographer',
    //     //     photo: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
    //     //     interests: 'photography',
    //     //     followed: true,
    //     // },
    //     // {
    //     //     id: 2,
    //     //     name: 'Your',
    //     //     familyName: 'Photographer',
    //     //     photo: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
    //     //     interests: 'photography',
    //     //     followed: false,
    //     // },
    //     // {
    //     //     id: 3,
    //     //     name: 'Your',
    //     //     familyName: 'Photographer',
    //     //     photo: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
    //     //     interests: 'photography',
    //     //     followed: true,
    //     // },
    //     // {
    //     //     id: 4,
    //     //     name: 'Your',
    //     //     familyName: 'Photographer',
    //     //     photo: 'https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg',
    //     //     interests: 'photography',
    //     //     followed: false,
    //     // },
    // ],)

    const onFollowButtonClick = () => {
        if (followed === true) {
            unfollowUser();
        } else followUser();
    }

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
                    <button onClick={onFollowButtonClick}>
                        {buttonTitle}
                    </button>
                </div>
            </div>
        </div>
    )
})
