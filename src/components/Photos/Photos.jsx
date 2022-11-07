import React from "react";
import {Photo} from "./Photo/Photo";
import Classes from './Photos.module.css'


export const Photos = (props) => {
    return (
        <div className={Classes.photos}>
            <input type='file'/>
            <Photo src='https://sun9-53.userapi.com/impg/EGQW3t4k6KwGL1BbQHD5WxGx4EVhjHXZkczElQ/DmRYkgwknAY.jpg?size=612x612&quality=96&sign=9ed2490ac3468c498b017def40f5bd64&type=album'/>
            <Photo src='https://sun9-53.userapi.com/impg/EGQW3t4k6KwGL1BbQHD5WxGx4EVhjHXZkczElQ/DmRYkgwknAY.jpg?size=612x612&quality=96&sign=9ed2490ac3468c498b017def40f5bd64&type=album'/>
            <Photo
                src='https://sun9-53.userapi.com/impg/EGQW3t4k6KwGL1BbQHD5WxGx4EVhjHXZkczElQ/DmRYkgwknAY.jpg?size=612x612&quality=96&sign=9ed2490ac3468c498b017def40f5bd64&type=album'/>

        </div>
    )
}
