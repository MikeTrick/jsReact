import React, {useMemo} from "react";
import {User} from "./User/User";
import {useSelector} from "react-redux";
import {getUsersState} from "../../redux/store/selectors";


export const Users = () => {
    let users = useSelector(getUsersState.getUsersSelector)

    let renderUsers = useMemo(() => users.map(({id, name, familyName, photo, interests}) =>
        (
            <User
                key={id}
                name={name}
                familyname={familyName}
                photo={photo}
                interests={interests}/>
        )), [users]);


    return (
        <div>
            {renderUsers}
            <User photo='https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg'/>
        </div>
    )
}