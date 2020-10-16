import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);
    return (
        <div>
            {
                users.map(user =><User
                    key={user.id}
                    user={user}
                    ></User>)
            }
        </div>
    );
};

export default Users;