import React from 'react';

const PostComment = (props) => {
    
    return (
        <div>
            <h5>{props.comment.name}</h5>
            <p><small>{props.comment.body}</small></p>
            <br/>
        </div>
    );
};

export default PostComment;