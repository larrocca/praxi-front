import React from 'react';
import './UserStatusComment.scss';

const UserStatusComment = (props) => {
    
    return (
        <div className="userStatusComment">
            <div className="userStatusCommentProfileImg"></div>
            <div className="userStatusCommentText">
                <div className="userStatusCommentTextUserName">{props.userName}</div>
                <div className="userStatusCommentTextComment">"{props.comment}"</div>
            </div>
        </div>
    )

}

export default UserStatusComment;
