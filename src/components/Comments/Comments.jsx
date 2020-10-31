import React, { } from 'react';
import CommentBox from './CommentBox/CommentBox';
import './Comments.scss';
import CommentsThread from './CommentsThread/CommentsThread';

const Comments = () => {
	return (
		<div className="ModelPriceCommentsContainer">
			<CommentBox/>
			<CommentsThread/>
			<CommentsThread/>
			<CommentsThread/>
		</div>
	);
};

export default Comments;
