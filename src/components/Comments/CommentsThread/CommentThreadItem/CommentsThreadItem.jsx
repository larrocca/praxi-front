import React, { } from 'react';
import './CommentsThreadItem.scss';

const CommentsThreadItem = () => {
	return (
		<div className="UserCommentContainer">
			<div className="UserCommentBoxProfileImage"></div>
			<div className="UserComment">
				<div className="UserName">El Bananero</div>
				<div className="Comment">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
			</div>
		</div>
	);
};

export default CommentsThreadItem;
