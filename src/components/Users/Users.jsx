import React, {useMemo} from "react";
import {useSelector} from "react-redux";

import {User} from "./User/User";
import {getUsersState} from "../../redux/store/selectors";

export const Users = () => {
    const users = useSelector(getUsersState.getUsersSelector)

    let renderUsers = useMemo(() => users.map(({name, familyName, photo, interests}, index) =>
        (
            <User
                name={name}
                familyname={familyName}
                photo={photo}
                interests={interests}
                key={`${name}-${familyName}-${index}`}
            />
        )), [users]);

    return (
        <div>
            {renderUsers}
            <User photo='https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg'/>
        </div>
    )
}
