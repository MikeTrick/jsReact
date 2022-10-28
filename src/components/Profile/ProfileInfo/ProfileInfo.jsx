import React from "react";
import UpperImage from "../../Upper-image.png";
import Classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={UpperImage} alt=''/>
            </div>
            <div>
                <img className={Classes.content__avatar}
                     src='https://sun9-31.userapi.com/s/v1/ig2/zMLro-Ttq1lxWjncdTBzlrRhNHD5S3O3I7pQq5Ia8Cxp0DJP3ki_7J2dJHdcSBs0ctTka10EETjtP_p2s9n4BDqm.jpg?size=810x1080&quality=95&type=album'
                     alt=''/>
            </div>
        </div>)
}