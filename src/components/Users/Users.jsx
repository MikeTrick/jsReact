import React, {useEffect, useMemo} from "react";
import {User} from "./User/User";
import {useSelector} from "react-redux";
import {getUsersPages, getUsersState,} from "../../redux/store/selectors";

import {useActions} from "../../common/hooks/useActions";
import axios from "axios";
import {usersActions} from "../../redux/actions";
import Classes from "./Users.module.css";

export const Users = () => {
    const {setUsers, setCurrentPage, setTotalUsersCount} = useActions(usersActions);


    let users = useSelector(getUsersState.getUsersSelector)
    let totalUsersCount = useSelector(getUsersPages.setTotalUsersCountSelector)
    let pageSize = useSelector(getUsersPages.getPagesCountSelector)
    let currentPage = useSelector(getUsersPages.setCurrentPage)


    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setTotalUsersCount(response.data.totalCount)
                setUsers(response.data.items)
            })
    }, [currentPage, pageSize])

    let renderUsers = useMemo(() => users.map(({id, ...userProps}) =>
        (
            <User
                key={id}
                id={id}
                {...userProps}
            />
        )), [users]);

    let pagesCount = Math.ceil(totalUsersCount / pageSize);


    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length<=15) {
            pages.push(i)
        }

    }


    const currentPageClassName = (page) => currentPage === page
        ? Classes.selectedPage
        : Classes.pages;

    return (

        <div>
            {/*<div>*/}
            {/*    <button onClick={getUsers}>Get Users</button>*/}
            {/*</div>*/}
            <div className={Classes.pages}>
                {pages.map((page) => {
                    return <span className={currentPageClassName(page)}
                                 onClick={() => setCurrentPage(page)}>{page}}</span>
                })
                }
            </div>

            {renderUsers}
        </div>
    )
}
