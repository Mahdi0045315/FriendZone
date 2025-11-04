const API_URL = 'http://localhost:3001/api';

const headers = {
    'Content-Type': 'application/json',
};

// Utilisé pour envoyer les cookies de session (important !)
const fetchWithCredentials = (url, options = {}) =>
    fetch(url, {
        ...options,
        credentials: 'include', // ⬅️ obligatoire pour que le cookie soit envoyé
        headers: {
            ...headers,
            ...options.headers,
        },
    });

// 🔐 REGISTER
export const register = async (username, email, password) => {
    const res = await fetchWithCredentials(`${API_URL}/auth/register`, {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
    });
    return res.json();
};

// 🔐 LOGIN
export const login = async (email, password) => {
    const res = await fetchWithCredentials(`${API_URL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
    return res.json();
};

// 🔐 LOGOUT
export const logout = async () => {
    const res = await fetchWithCredentials(`${API_URL}/auth/logout`, {
        method: 'POST',
    });
    return res.json();
};

// 🔐 GET SESSION (whoami)
export const getSession = async () => {
    const res = await fetchWithCredentials(`${API_URL}/auth/session`);
    return res.json();
};
