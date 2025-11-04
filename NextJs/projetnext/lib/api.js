const BASE_URL = 'http://localhost:3001/api';

// REGISTER
export async function register(username, email, password) {
    try {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, email, password }),
        });
        if (!res.ok) throw new Error('Échec de l’enregistrement');
        return await res.json();
    } catch (error) {
        console.error('Erreur lors de l’enregistrement:', error);
        throw error;
    }
}

// LOGIN
export async function login(email, password) {
    try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });
        if (!res.ok) throw new Error('Échec de la connexion');

        return await res.json();
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        throw error;
    }
}

// LOGOUT
export async function logout() {
    try {
        const res = await fetch(`${BASE_URL}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        });
        if (!res.ok) throw new Error('Échec de la déconnexion');
        return await res.json();
    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
        throw error;
    }
}

// GET SESSION
export async function getSession() {
    try {
        const res = await fetch(`${BASE_URL}/auth/session`, {
            credentials: 'include',
        });
        if (!res.ok) throw new Error('Échec de la récupération de la session');
        return await res.json();
    } catch (error) {
        console.error('Erreur lors de la récupération de la session:', error);
        throw error;
    }
}

// GET PROFILE
export async function getProfile(userId) {
    try {
        const res = await fetch(`${BASE_URL}/users/${userId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Erreur lors de la récupération du profil');
        }
        return await res.json();
    } catch (error) {
        console.error('Erreur dans getProfile:', error);
        throw error;
    }
}

// data doit contenir { id, username, email, password, profilePic, coverPic, bio }
export async function updateProfile(data) {
    try {
        const session = await getSession();

        if (!session.user?.id) throw new Error('ID utilisateur manquant');

        const { id, ...updateFields } = data; // Optionnel, car on prend id de session
        // Utiliser l'id de la session, ignore celui dans data
        const userId = session.user.id;

        const res = await fetch(`${BASE_URL}/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(updateFields),
        });

        if (!res.ok) throw new Error('Échec de la mise à jour du profil');
        return await res.json();
    } catch (error) {
        console.error('Erreur lors de la mise à jour du profil:', error);
        throw error;
    }
}



// GET FOLLOWING
export async function getFollowing(userId) {
    try {
        const res = await fetch(`${BASE_URL}/follow/following/${userId}`, {
            credentials: 'include',
        });
        if (!res.ok) throw new Error('Échec de la récupération des abonnements');
        return await res.json();
    } catch (error) {
        console.error('Erreur lors de la récupération des abonnements:', error);
        throw error;
    }
}

// GET FOLLOWERS
export async function getFollowers(userId) {
    try {
        const res = await fetch(`${BASE_URL}/follow/followers/${userId}`, {
            credentials: 'include',
        });
        if (!res.ok) throw new Error('Échec de la récupération des abonnés');
        return await res.json();
    } catch (error) {
        console.error('Erreur lors de la récupération des abonnés:', error);
        throw error;
    }
}

// FOLLOW
export async function followUser(followerId, followingId) {
    try {
        const res = await fetch(`${BASE_URL}/follow`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ followerId, followingId }),
        });
        if (!res.ok) throw new Error('Échec du suivi');
        return await res.json();
    } catch (error) {
        console.error('Erreur lors du suivi:', error);
        throw error;
    }
}

// UNFOLLOW
export async function unfollowUser(followerId, followingId) {
    try {
        const res = await fetch(`${BASE_URL}/follow`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ followerId, followingId }),
        });
        if (!res.ok) throw new Error('Échec du désabonnement');
        return await res.json();
    } catch (error) {
        console.error('Erreur lors du désabonnement:', error);
        throw error;
    }
}
