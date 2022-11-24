import React from "react";
import {User} from "./User/User";


export const Users = (state) => {
    let user = state.usersPage.usersData.map(u => <User name={u.name} familyName={u.familyName} photo={u.photo}  interests={u.interests}/>)
    // return <User state={props.appState.usersPage.usersData}/>
    return (
        <div>
            {user}
        </div>
    )
}