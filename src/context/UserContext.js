// src/context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user] = useState({ name: 'Quang Bui' });

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
