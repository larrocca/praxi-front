import React, { } from 'react';
import './CommentsThread.scss';
import CommentsThreadItem from './CommentThreadItem/CommentsThreadItem';

const CommentsThread = () => {
	return (
		<div className="ModelPriceCommentsThreadContainer">
			<CommentsThreadItem />
		</div>
	);
};

export default CommentsThread;
