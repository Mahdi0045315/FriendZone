'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Simule l'ID utilisateur connecté, à remplacer par ta méthode réelle
const getCurrentUserId = () => {
    // Exemple : récupérer depuis localStorage, cookie, contexte auth, etc.
    return '123'; // Remplace par ton userId connecté
};

export default function ProfilePage() {
    const params = useParams();
    const { id } = params;

    const [user, setUser] = useState(null);
    const [followersCount, setFollowersCount] = useState(0);
    const [followingsCount, setFollowingsCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(null);

    const formatDate = (dateStr) => {
        if (!dateStr) return 'N/A';
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    useEffect(() => {
        setCurrentUserId(getCurrentUserId());
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userRes = await fetch(`http://localhost:3001/api/users/${id}`);
                if (!userRes.ok) throw new Error("Erreur lors du chargement de l'utilisateur");

                const userData = await userRes.json();
                setUser(userData);

                const followersRes = await fetch(`http://localhost:3001/api/follow/${id}/followers/count`);
                const followersData = await followersRes.json();
                setFollowersCount(followersData.followersCount || 0);

                const followingsRes = await fetch(`http://localhost:3001/api/follow/${id}/following/count`);
                const followingsData = await followingsRes.json();
                setFollowingsCount(followingsData.followingCount || 0);

                const postsRes = await fetch(`http://localhost:3001/api/posts/user/${id}`);
                const postsData = await postsRes.json();
                setPosts(postsData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchUserData();
    }, [id]);

    if (loading) return <p style={{ textAlign: 'center', marginTop: 50 }}>Chargement...</p>;
    if (error) return <p style={{ textAlign: 'center', marginTop: 50, color: 'red' }}>Erreur : {error}</p>;
    if (!user) return <p style={{ textAlign: 'center', marginTop: 50 }}>Utilisateur non trouvé</p>;

    const hiddenFields = ['password', 'id', 'isAdmin'];

    return (
        <div style={{ maxWidth: 1000, margin: '30px auto', fontFamily: 'Segoe UI, sans-serif' }}>
            {/* Bandeau de couverture */}
            <div
                style={{
                    height: 220,
                    backgroundImage: user.coverPic
                        ? `url(${user.coverPic})`
                        : 'linear-gradient(to right, #4A90E2, #145DA0)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 12,
                    position: 'relative',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
            >
                <img
                    src={user.profilePic || '/default-avatar.png'}
                    alt="avatar"
                    style={{
                        position: 'absolute',
                        bottom: -60,
                        left: 40,
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        border: '5px solid white',
                        objectFit: 'cover',
                        backgroundColor: '#eee',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                    }}
                />
            </div>

            {/* Bloc principal */}
            <div
                style={{
                    marginTop: 80,
                    padding: 30,
                    backgroundColor: 'white',
                    borderRadius: 12,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <div>
                        <h1 style={{ fontSize: '2rem', marginBottom: 4 }}>{user.username}</h1>
                        <p style={{ color: '#555' }}>{user.email}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p>
                            <strong>{followersCount}</strong> abonnés
                        </p>
                        <p>
                            <strong>{followingsCount}</strong> abonnements
                        </p>
                    </div>
                </div>

                <p style={{ marginTop: 10, color: '#666' }}>{user.bio || 'Aucune biographie disponible.'}</p>
                <p style={{ color: '#999', fontSize: '0.9rem', marginTop: 4 }}>
                    Membre depuis le {formatDate(user.createdAt)}
                </p>

                {/* Champs supplémentaires */}
                <div
                    style={{
                        marginTop: 20,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 20,
                    }}
                >
                    {Object.entries(user).map(([key, value]) => {
                        if (
                            hiddenFields.includes(key) ||
                            [
                                'username',
                                'email',
                                'bio',
                                'profilePic',
                                'coverPic',
                                'createdAt',
                                'updatedAt',
                            ].includes(key)
                        )
                            return null;
                        return (
                            <div key={key}>
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                                <div style={{ color: '#444', marginTop: 4 }}>
                                    {typeof value === 'object' ? JSON.stringify(value) : value?.toString() || 'N/A'}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Publications */}
                <div style={{ marginTop: 40 }}>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: 12 }}>Publications</h2>
                    {posts.length === 0 ? (
                        <p style={{ color: '#888' }}>Aucune publication.</p>
                    ) : (
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: 20,
                            }}
                        >
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    style={{
                                        backgroundColor: '#f7f9fb',
                                        borderRadius: 10,
                                        padding: 16,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                    }}
                                >
                                    <p>{post.content}</p>
                                    <small style={{ color: '#888' }}>{formatDate(post.createdAt)}</small>
                                    {post.media_media_postIdTopost?.length > 0 && (
                                        <div
                                            style={{ marginTop: 10, display: 'flex', gap: 10, flexWrap: 'wrap' }}
                                        >
                                            {post.media_media_postIdTopost
                                                .filter((media) => media.url)
                                                .map((media) => (
                                                    <img
                                                        key={media.id}
                                                        src={media.url}
                                                        alt="media"
                                                        style={{
                                                            maxWidth: '100%',
                                                            height: 120,
                                                            objectFit: 'cover',
                                                            borderRadius: 6,
                                                        }}
                                                    />
                                                ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Bouton message flottant (affiché uniquement si ce n’est pas ton profil) */}
                {currentUserId !== id && (
                    <Link href="/conversation">
                        <button
                            style={{
                                marginTop: 40,
                                padding: '12px 28px',
                                backgroundColor: '#4A90E2',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 8,
                                fontSize: '1rem',
                                cursor: 'pointer',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#357ABD')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4A90E2')}
                        >
                            ✉️ Envoyer un message
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}
