import React, { } from 'react';
import './CommentBox.scss';

const CommentBox = () => {
	return (
		<div className="UserCommentBoxContainer">
			<div className="UserCommentBoxProfileImage"></div>
			<div className="UserCommentTextbox">
				<textarea name="" placeholder="Tenes alguna duda? Preguntale al maker" id="" cols="30" rows="10"></textarea>
			</div>
		</div>
	);
};

export default CommentBox;
