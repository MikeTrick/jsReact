import React from "react";
import {User} from "./User/User";


export const Users = (state) => {
    let users = state.usersData.map(u => <User familyname={u.familyName} name={u.name} photo={u.photo}  interests={u.interests}/>)
    // return <User state={props.appState.usersPage.usersData}/>
    return (
        <div>
            {users}
        </div>
    )
}