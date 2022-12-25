import React, {useMemo} from "react";
import {User} from "./User/User";
import {useSelector} from "react-redux";
import {getUsersState} from "../../redux/store/selectors";
import {useActions} from "../../common/hooks/useActions";
import axios from "axios";
import {usersActions} from "../../redux/actions";

export const Users = () => {
    const {setUsers} = useActions(usersActions);

    let users = useSelector(getUsersState.getUsersSelector)

    if (users.length ===0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items)
        })
    }


    let renderUsers = useMemo(() => users.map(({id, ...userProps}) =>
        (
            <User
                key={id}
                id={id}
                {...userProps}
            />
        )), [users]);


    return (
        <div>
            {renderUsers}
            {/*<User photo='https://www.paperlessmovement.com/wp-content/uploads/2019/09/o2dvsv2pnhe.jpg'/>*/}
        </div>
    )
}
