import React from "react";

import follow from './../../media/FOLLOW.mp4'
import ishMish from './../../media/ISHMISH.mp4'

import Classes from './Videos.module.css'


export const Videos = (props) => {
    const videoSrc = {
        Src: follow,
    }

    return (
        <div className={Classes.videos}>
            <div>

                <div>
                    <video width="400" controls>
                        <source
                            src={follow}
                        />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
            <div>

                <div>
                    <video width="400" controls >
                        <source

                            src={'https://youtu.be/FdZLcfX4fRY'}
                        />
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>
        </div>
    )
}
