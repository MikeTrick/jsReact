import React from "react";
import Classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";

console.log(Classes);

export const Navbar = (props) => {

    let friendsElement = props.state.friendsData
        .map(f=> <Friends name={f.name} familyName={f.familyName} photo={f.photo}/>)


    return (<nav className={Classes.nav}>
        <div className={Classes.item}>
            <NavLink to='/profile'
                     className={navData => navData.isActive ? Classes.active : Classes.item}>Profile</NavLink>
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
        <NavLink to='videos'
                 className={navData => navData.isActive ? Classes.active : Classes.item}>Videos</NavLink>
    </div>
        <hr className={Classes.hr}/>
        <h1>FRIENDS ({friendsElement.length})</h1>
        <div className={Classes.friends}>
            {friendsElement}
        </div>
    </nav>)
}