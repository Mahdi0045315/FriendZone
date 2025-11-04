'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function UsersPage() {
    const { user: authUser } = useAuth();
    const currentUserId = authUser?.id;

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [followedUsers, setFollowedUsers] = useState([]);
    const [updating, setUpdating] = useState(null); // pour désactiver bouton temporairement

    useEffect(() => {
        if (!currentUserId) return;

        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:3001/api/users/all-except-me?currentUserId=${currentUserId}`, {
                    credentials: 'include'
                });
                if (!res.ok) throw new Error(`Erreur réseau: ${res.status}`);
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError(err.message || 'Erreur inconnue');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [currentUserId]);

    useEffect(() => {
        if (!currentUserId) return;

        const fetchFollowedUsers = async () => {
            try {
                const res = await fetch(`http://localhost:3001/api/follow/following/${currentUserId}`, {
                    credentials: 'include',
                });
                if (!res.ok) throw new Error(`Erreur réseau: ${res.status}`);
                const data = await res.json();
                setFollowedUsers(data); // doit être un tableau d'IDs
            } catch (err) {
                console.error("Erreur de chargement des followings:", err.message);
            }
        };

        fetchFollowedUsers();
    }, [currentUserId]);

    const handleToggleFollow = async (userId) => {
        if (!currentUserId) return;

        setUpdating(userId);
        const isFollowing = followedUsers.includes(userId);

        try {
            if (isFollowing) {
                const res = await fetch(`http://localhost:3001/api/follow/${userId}`, {
                    method: "DELETE",
                    credentials: "include",
                });
                if (!res.ok) throw new Error(`Erreur ${res.status}`);
                setFollowedUsers((prev) => prev.filter((id) => id !== userId));
            } else {
                const res = await fetch("http://localhost:3001/api/follow", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        followerId: currentUserId,
                        followingId: userId,
                    }),
                    credentials: "include",
                });
                if (!res.ok) throw new Error(`Erreur ${res.status}`);
                setFollowedUsers((prev) => [...prev, userId]);
            }
        } catch (err) {
            console.error("Erreur toggle follow:", err.message);
        } finally {
            setUpdating(null);
        }
    };

    if (loading) return <div className="text-center mt-5">Chargement...</div>;
    if (error) return <div className="text-center mt-5 text-danger">Erreur : {error}</div>;
    if (!users.length) return <div className="text-center mt-5">Aucun utilisateur trouvé.</div>;

    return (
        <div className="container py-4" style={{ maxWidth: '800px' }}>
            <h2 className="text-center mb-4 fw-bold">Utilisateurs suggérés</h2>
            <div className="d-flex flex-column gap-3">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="d-flex align-items-center p-3 bg-white border rounded shadow-sm justify-content-between"
                    >
                        <Link href={`/detail_profile/${user.id}`} className="text-decoration-none text-dark flex-grow-1">
                            <div className="d-flex align-items-center">
                                <img
                                    src={user.profilePic || '/default-avatar.png'}
                                    alt={`Avatar de ${user.username}`}
                                    className="rounded-circle me-3"
                                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                />
                                <div>
                                    <h6 className="mb-0 fw-semibold">{user.username}</h6>
                                    <small className="text-muted">{user.email}</small>
                                    {user.bio && (
                                        <p className="mt-1 mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
                                            {user.bio}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Link>
                        <button
                            className={`btn btn-sm ms-3 ${followedUsers.includes(user.id) ? "btn-outline-danger" : "btn-primary"}`}
                            onClick={() => handleToggleFollow(user.id)}
                            disabled={updating === user.id}
                        >
                            {updating === user.id
                                ? "Chargement..."
                                : followedUsers.includes(user.id)
                                    ? "Se désabonner"
                                    : "Suivre"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
