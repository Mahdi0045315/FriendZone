'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSession } from '../../../lib/api';

export default function ProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [followersCount, setFollowersCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);

    useEffect(() => {
        const fetchUserAndPosts = async () => {
            try {
                const session = await getSession();
                if (session?.user) {
                    setUser(session.user);

                    const [resPosts, resFollowers, resFollowing] = await Promise.all([
                        fetch(`http://localhost:3001/api/posts/user/${session.user.id}`),
                        fetch(`http://localhost:3001/api/follow/${session.user.id}/followers/count`),
                        fetch(`http://localhost:3001/api/follow/${session.user.id}/following/count`)
                    ]);

                    const postsData = await resPosts.json();
                    setPosts(postsData);

                    const dataFollowers = await resFollowers.json();
                    setFollowersCount(dataFollowers.followersCount || 0);

                    const dataFollowing = await resFollowing.json();
                    setFollowingCount(dataFollowing.followingCount || 0);
                } else {
                    router.push('/auth/login');
                }
            } catch (err) {
                console.error('Erreur :', err);
                router.push('/auth/login');
            } finally {
                setLoading(false);
            }
        };

        fetchUserAndPosts();
    }, [router]);

    const handleDeleteProfile = async () => {
        if (!user) return;

        const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer votre profil ? Cette action est irréversible.");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:3001/api/users/${user.id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            const data = await response.json();

            if (data.success) {
                alert('Votre profil a été supprimé avec succès.');
                router.push('/');
            } else {
                alert(data.message || 'Erreur lors de la suppression.');
            }
        } catch (error) {
            console.error('Erreur suppression :', error);
            alert('Erreur réseau.');
        }
    };

    const handleDeletePost = async (postId) => {
        const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cette publication ?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`http://localhost:3001/api/posts/${postId}`, {
                method: 'DELETE',
                credentials: 'include'
            });

            const data = await res.json();

            if (res.ok) {
                alert("Publication supprimée !");
                setPosts(prev => prev.filter(p => p.id !== postId));
            } else {
                alert(data.message || "Erreur lors de la suppression.");
            }
        } catch (error) {
            console.error("Erreur suppression publication :", error);
            alert("Erreur réseau.");
        }
    };

    if (loading) return <div className="text-center mt-20 text-lg text-gray-600 animate-pulse">Chargement du profil...</div>;

    return (
        <div className="max-w-6xl mx-auto mt-12 px-6">
            {/* Cover Photo */}
            {user?.coverPic ? (
                <div className="w-full h-52 rounded-t-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <img
                        src={user.coverPic}
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : (
                <div className="w-full h-52 rounded-t-3xl bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg" />
            )}

            {/* Profile Info */}
            <div className="bg-white shadow-xl rounded-b-3xl px-8 pt-24 pb-8 relative -mt-0">
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                    <img
                        src={user?.profilePic || 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}
                        alt="Profil"
                        className="w-40 h-40 rounded-full border-8 border-white object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                </div>

                <div className="text-center mt-4 space-y-2">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide">{user?.username}</h2>
                    <p className="text-gray-500 text-base">{user?.email}</p>
                    {user?.bio && (
                        <p className="mt-2 text-gray-700 italic max-w-xl mx-auto text-sm tracking-wide">
                            {user.bio}
                        </p>
                    )}
                    <p className="text-gray-400 mt-1 text-xs">
                        Membre depuis le {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                    </p>

                    {/* Followers / Following */}
                    <div className="flex justify-center gap-10 mt-6 text-gray-700">
                        <div className="text-center hover:text-blue-600 cursor-pointer transition-colors duration-300">
                            <span className="block text-2xl font-bold">{followersCount}</span>
                            <span className="text-sm">Abonnés</span>
                        </div>
                        <div className="text-center hover:text-blue-600 cursor-pointer transition-colors duration-300">
                            <span className="block text-2xl font-bold">{followingCount}</span>
                            <span className="text-sm">Abonnements</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-6 mt-8 flex-wrap">
                    <button
                        onClick={() => router.push('/')}
                        className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
                    >
                        Accueil
                    </button>
                    <button
                        onClick={() => router.push('/profile/edit')}
                        className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 shadow-lg transition"
                    >
                        Modifier le profil
                    </button>
                    <button
                        onClick={handleDeleteProfile}
                        className="px-6 py-2 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 shadow-lg transition"
                    >
                        Supprimer le profil
                    </button>
                </div>
            </div>

            {/* Publications */}
            <section className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 tracking-wide">Publications</h3><br /><br />
                {posts.length === 0 ? (
                    <p className="text-center text-gray-500 italic">Aucune publication pour le moment.</p>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {posts.map((post) =>
                            post.media_media_postIdTopost?.map((media) => (
                                <div
                                    key={media.id}
                                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-blue-400 hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 group bg-white border border-gray-200"
                                >
                                    {/* Bouton suppression */}
                                    <button
                                        onClick={() => handleDeletePost(post.id)}
                                        className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-7 h-7 text-xs font-bold flex items-center justify-center hover:bg-red-700 z-10 shadow-lg"
                                        title="Supprimer"
                                    >
                                        ✕
                                    </button>

                                    {/* Overlay info */}
                                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white px-3 py-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                        {post.description || 'Sans description'}
                                        <p className="mt-1 text-[10px] text-gray-300">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>

                                    {/* Badge pour les vidéos */}
                                    {media.type === 'video' && (
                                        <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full z-10">
                                            🎥 Vidéo
                                        </div>
                                    )}

                                    {media.type === 'image' ? (
                                        <img
                                            src={media.url}
                                            alt="post"
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <video
                                            src={media.url}
                                            controls
                                            className="w-full h-48 object-cover rounded-xl"
                                        />
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                )}
            </section>


            {/* Floating Button */}
            <button
                onClick={() => router.push('/publication')}
                className="fixed bottom-10 right-10 w-16 h-16 bg-blue-600 text-white rounded-full text-4xl font-extrabold shadow-2xl hover:bg-blue-700 flex items-center justify-center transition"
                aria-label="Créer une publication"
                title="Créer une publication"
            >
                +
            </button>

            <br /><br /><br />
        </div>
    );
}
