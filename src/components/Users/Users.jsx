import React, {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import axios from "axios";

import {User} from "./User/User";
import {getUsersPages, getUsersState,} from "../../redux/store/selectors";
import {useActions} from "../../common/hooks/useActions";
import {usersActions} from "../../redux/actions";
import Classes from "./Users.module.css";

import {Preloader} from "../Preloader/Preloader";

export const Users = () => {
    const {setUsers, setCurrentPage, setTotalUsersCount, setIsFetching} = useActions(usersActions);


    let users = useSelector(getUsersState.getUsersSelector)
    let totalUsersCount = useSelector(getUsersPages.setTotalUsersCountSelector)
    let pageSize = useSelector(getUsersPages.getPagesCountSelector)
    let currentPage = useSelector(getUsersPages.setCurrentPage)
    let isFetching = useSelector(getUsersState.isFetching)


    useEffect(() => {
        setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setIsFetching(false)
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
        if (pages.length <= 15) {
            pages.push(i)
        }

    }


    const currentPageClassName = (page) => currentPage === page
        ? Classes.selectedPage
        : Classes.pages;

    return (
        <div>
            <div>
                {isFetching && <Preloader />}
            </div>
            <div>
                <div className={Classes.pages}>
                    {
                        pages.map((page) => (
                            <span
                                className={currentPageClassName(page)}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </span>
                        ))
                    }
                    {renderUsers}
                </div>
            </div>
        </div>
    )
}

//PRELOADER WORKS LESSON N57
