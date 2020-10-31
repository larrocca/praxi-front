import React from 'react';
import './MessagePage.scss';
import MessageTab from '../../components/Message/MessageTab/MessageTab';
import MessageModelsExplorer from '../../components/Message/MessageModelsExplorer/MessageModelsExplorer';
import Chat from '../../components/Message/Chat/Chat';

const MessagePage = () => {
    return(
        <div className='messagePageContainer'>
            <MessageTab />
            <Chat />
            <MessageModelsExplorer />
        </div>
    )
}

export default MessagePage;