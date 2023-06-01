import React from "react";
import Classes from './News.module.css'

export const News = () => {
    return (
        <div className={Classes.news}>
            <a href="https://www.nytimes.com/" target='_blank'><img src="https://download.logo.wine/logo/The_New_York_Times/The_New_York_Times-Logo.wine.png" alt="1"/></a>
        </div>
    )
}
