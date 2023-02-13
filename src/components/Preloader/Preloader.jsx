import React from "react";
import Classes from './Preloader.module.css';
// import preloader from "../ripple.svg";

// закомментил прелоадер, так как видимо не был добавден в индекс => не подтянулся, проект не собирается]

export const Preloader = (props) => {

    return (
        <div className={Classes.content}>
            Загрузка...
                {/*<img src={preloader} alt=""/>*/}
        </div>
    )
}
