import React from 'react';
import './MessageInput.scss';
import { ReactComponent as SendLogo } from '../../../../assets/Message/send.svg';
import { ReactComponent as EmojiLogo } from '../../../../assets/Message/emoji.svg';

const MessageInput = () => {
	return (
		<div className="messageInputComponentContainer">			
            <div className="messageInput">
				<input
					className="inputIn"
					type="text"
					placeholder="Escribir un mensaje..."
					/*value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}*/
                />
                <EmojiLogo className='emoji'/>
			</div>
			<div className="purpleButton">
				<SendLogo className="sendLogo" />
			</div>
		</div>
	);
};

export default MessageInput;
