import React from 'react';
import './Chat.scss';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

const Chat = () => {
    return(
    <div className='chatContainer'>
        <div className="messageContainer">
            <Message />
            <Message isUser="false"/>
            <Message />
            <Message isUser="false"/>
            <Message />
            <Message isUser="false"/>
            <Message />
        </div>
        <div className="messageInputContainer">
            <MessageInput />
        </div> 
    </div>    
    )
}

export default Chat;