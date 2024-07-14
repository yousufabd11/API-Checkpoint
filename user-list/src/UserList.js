// src/UserList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUser(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div className="user-list">
            <h1>List of Users</h1>
            <ul>
                {listOfUser.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
