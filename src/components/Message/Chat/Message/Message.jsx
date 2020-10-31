import React from 'react';
import './Message.scss';

const Message = (param) => {
	return (
        <div className='messagesComponentContainer'
            style={param.isUser ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }}>
            <div className={param.isUser ? " messageBoxRight" : "messageBoxLeft"}>
                <p className="messageText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
            </div>
        </div>
    )
};

export default Message;
