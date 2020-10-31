import React from 'react';
import './UserStatus.scss';
import UserStatusStarsInfo from './UserStatusStarsInfo/UserStatusStarsInfo';
import UserStatusComment from './UserStatusComment/UserStatusComment';

const UserStatus = (param) => {    
    
    return (
        <div className="userStatus">
            <div className="userStatusInfo">
                <div className="userStatusStarsContainer">
                    <UserStatusStarsInfo title="Calidad de impresión" value="5" size={param.size} />
                    <UserStatusStarsInfo title="Velocidad" value="2.6" size={param.size}/>
                    <UserStatusStarsInfo title="Atención" value="4.2" size={param.size}/>
                </div>
                <div className="userStatusInfoCount">
                    2.3<span>/5</span>
                </div>
            </div>
            <div className="userStatusCommentsContainer" style={param.showComments ? {display: 'flex'} : {display: 'none'}}>
                <UserStatusComment userName="Elwa Son" comment="Un divino"/>
                <UserStatusComment userName="Perón" comment="Hermosa herramienta para los trabajadores"/>
            </div>
        </div>
    )

}

export default UserStatus;
