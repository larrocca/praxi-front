import React from 'react';
import './UserStatusStarsInfo.scss';
import UserStatusStars from './UserStatusStars/UserStatusStars';

const UserStatusStarsInfo = (props) => {
    
    return (
        <div className="userStatusStarsInfo">
            <div className="userStatusStarsInfoTitle">{props.title}</div>
            <div className="userStatusFiveStarsContainer">
                <UserStatusStars value={props.value} size={props.size}/>
            </div>
        </div>
    )

}

export default UserStatusStarsInfo;
