import React from 'react';
import './MessageUsers.scss';
import Joker from '../../../../assets/Misc/joker.png';

const MessageUsers = () => {
	return ( 
        <div className='messageUser'>
            <div className='userInfo'>
                <div className='userImg'>
                    <img src={Joker} />
                </div>
                <div className='userText'>
                    <div className='userName'> 
                        <span>Nombre del Usuario</span>
                    </div>
                    <div className='userLastMessage'>
                        <span>Lorem ipsum dolor sit amet...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageUsers;
