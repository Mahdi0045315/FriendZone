'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getSession, login as apiLogin, logout as apiLogout, register as apiRegister } from '../../lib/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getSession().then((res) => {
            if (res.user) setUser(res.user);
            else setUser(null);
        });
    }, []);

    const login = async (email, password) => {
        const res = await apiLogin(email, password);
        if (res.user) setUser(res.user);
        return res;
    };

    const register = async (username, email, password) => {
        const res = await apiRegister(username, email, password);
        if (res.user) setUser(res.user);
        return res;
    };

    const logout = async () => {
        await apiLogout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
