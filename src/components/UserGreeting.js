// src/components/UserGreeting.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserGreeting() {
    const user = useContext(UserContext);
    return <h1>Welcome, {user.name}!</h1>;
}

export default UserGreeting;
