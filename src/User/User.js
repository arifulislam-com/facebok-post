import React from 'react';
import './User.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {title, body, id}=user;
    return (
        <div className="User">
            <div className="post">
                <h3>{title}</h3>
                <p>{body}</p>
                <Link to={`/id/${id}`}>
                <Button variant="contained" color="primary">show details</Button>
                </Link>
            </div>
        </div>
    );
};

export default User;