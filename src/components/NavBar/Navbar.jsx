import React, {useMemo} from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {Friends} from "../../pages/Friends/Friends";
import {getNavState} from "../../redux/store/selectors";
import Classes from './Navbar.module.css';

export const Navbar = () => {
    const friends = useSelector(getNavState.getFriendsDataSelector);
    const renderFriends = useMemo(() => friends.map((friend) => (
        <Friends
            key={friend.id}
            name={friend.name}
            familyName={friend.familyName}
            photo={friend.photo}
        />
    )), [friends])


    return (<nav className={Classes.nav}>
        <div className={Classes.item}>
            <NavLink to='/profile'
                     className={navData => navData.isActive ? Classes.active : Classes.item}>Profile</NavLink>
        </div>
        <div className={Classes.item}>
            <NavLink to='users'
                     className={navData => navData.isActive ? Classes.active : Classes.item}>Search User</NavLink>
        </div>
        <div className={`${Classes.item}`}>
            <NavLink to='/dialogs'
                     className={navData => navData.isActive ? Classes.active : Classes.item}>Messages</NavLink>
        </div>
        <div className={Classes.item}>
            <NavLink to='news' className={navData => navData.isActive ? Classes.active : Classes.item}>News</NavLink>
        </div>

        <div className={Classes.item}>
            <NavLink to='music' className={navData => navData.isActive ? Classes.active : Classes.item}>Music</NavLink>
        </div>
        <div className={Classes.item}>
            <NavLink to='settings'
                     className={navData => navData.isActive ? Classes.active : Classes.item}>Settings</NavLink>
        </div>
        <div className={Classes.item}>
            <NavLink to='photos'
                     className={navData => navData.isActive ? Classes.active : Classes.item}>Photos</NavLink>
        </div>
        <div className={Classes.item}>
            <NavLink to='videos'
                     className={navData => navData.isActive ? Classes.active : Classes.item}>Videos</NavLink>
        </div>
        <hr className={Classes.hr}/>
        <h1>FRIENDS ({friends.length})</h1>
        <div className={Classes.friends}>
            {renderFriends}
        </div>
    </nav>)
}
