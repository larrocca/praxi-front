import React from 'react';
import './MessageTab.scss';
import MessageUsers from './MessageUsers/MessageUsers';

const MessageTab = () => {
    return (
        <div className='messageTabContainer'>
            <MessageUsers />
            <MessageUsers />
            <MessageUsers />
        </div>
    )
}

export default MessageTab;