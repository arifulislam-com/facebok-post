import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';
import './PostDetails.css'

const PostDetails = () => {
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(json => setPost(json))
    },[]);
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
            <div className="User">
                <div className="post">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            </div>
            <div className="comment">
                {
                    comment.map(comment=><PostComment key={comment.id} comment={comment}></PostComment>)
                }
            </div>
        </div>
    );
};

export default PostDetails;