import React from 'react';
import './UserStatusStars.scss';
import { ReactComponent as FullStar } from '../../../../assets/ProfilePage/UserStatus/fullStar.svg';
import { ReactComponent as HalfStar } from '../../../../assets/ProfilePage/UserStatus/halfStar.svg';
import { ReactComponent as HollowStar } from '../../../../assets/ProfilePage/UserStatus/hollowStar.svg';

const UserStatusStars = (props) => {

    const getStart = (diferenceValue) => {        
        var tempValue = props.value - diferenceValue;
        if(tempValue >= 0) return <FullStar/>;
        if(tempValue >= -0.5) return <HalfStar/>;
        else return <HollowStar/>
    }
    
    return (
        <div className={"userStatusStars " + props.size}>
            {getStart(1)}
            {getStart(2)}
            {getStart(3)}
            {getStart(4)}
            {getStart(5)}
        </div>
    )

}

export default UserStatusStars;

