'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [likedPostIds, setLikedPostIds] = useState([]);
    const { user } = useAuth();
    const [hoveredCardId, setHoveredCardId] = useState(null);

    // États pour les commentaires
    const [comments, setComments] = useState({});
    const [newCommentContent, setNewCommentContent] = useState({});
    const [editCommentId, setEditCommentId] = useState(null);
    const [editedContent, setEditedContent] = useState('');

    // États pour le partage
    const [showShareModal, setShowShareModal] = useState(false);
    const [followers, setFollowers] = useState([]);
    const [isLoadingFollowers, setIsLoadingFollowers] = useState(false);
    const [selectedPostToShare, setSelectedPostToShare] = useState(null);

    // États pour la sidebar et les popups
    const [showFollowersPopup, setShowFollowersPopup] = useState(false);
    const [showFollowingsPopup, setShowFollowingsPopup] = useState(false);
    const [myFollowers, setMyFollowers] = useState([]);
    const [myFollowings, setMyFollowings] = useState([]);
    const [isLoadingMyFollowers, setIsLoadingMyFollowers] = useState(false);
    const [isLoadingMyFollowings, setIsLoadingMyFollowings] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('http://localhost:3001/api/posts');
                const data = await res.json();

                const postsWithLikesCount = data.map(post => ({
                    ...post,
                    likesCount: post.like ? post.like.length : 0,
                }));

                setPosts(postsWithLikesCount);
                data.forEach(post => fetchComments(post.id));
            } catch (err) {
                console.error('Erreur de récupération des posts:', err);
            }
        };

        const fetchUserLikes = async () => {
            if (user) {
                try {
                    const res = await fetch(`http://localhost:3001/api/likes/user/${user.id}`);
                    const data = await res.json();
                    setLikedPostIds(data.map((like) => like.postId));
                } catch (err) {
                    console.error('Erreur de récupération des likes:', err);
                }
            } else {
                setLikedPostIds([]);
            }
        };

        fetchPosts();
        fetchUserLikes();
    }, [user]);

    const fetchComments = async (postId) => {
        try {
            const res = await fetch(`http://localhost:3001/api/comments/post/${postId}`);
            const data = await res.json();
            setComments(prev => ({ ...prev, [postId]: data }));
        } catch (err) {
            console.error(err);
            setComments(prev => ({ ...prev, [postId]: [] }));
        }
    };

    const handleAddComment = async (postId) => {
        if (!user) return alert('Vous devez être connecté pour commenter.');
        const content = newCommentContent[postId];
        if (!content || content.trim() === '') return alert('Le commentaire ne peut pas être vide.');
        try {
            const res = await fetch('http://localhost:3001/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content, userId: user.id, postId }),
            });
            if (res.ok) {
                setNewCommentContent(prev => ({ ...prev, [postId]: '' }));
                fetchComments(postId);
            }
        } catch (err) {
            alert('Erreur ajout commentaire');
        }
    };

    const handleDeleteComment = async (commentId, postId) => {
        try {
            const res = await fetch(`http://localhost:3001/api/comments/${commentId}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchComments(postId);
            } else {
                alert('Erreur lors de la suppression');
            }
        } catch (err) {
            alert('Erreur réseau lors de la suppression');
        }
    };

    const handleEditComment = (comment) => {
        setEditCommentId(comment.id);
        setEditedContent(comment.content);
    };

    const handleSaveEdit = async (commentId, postId) => {
        try {
            const res = await fetch(`http://localhost:3001/api/comments/${commentId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: editedContent }),
            });
            if (res.ok) {
                setEditCommentId(null);
                setEditedContent('');
                fetchComments(postId);
            } else {
                alert('Erreur lors de la modification');
            }
        } catch (err) {
            alert('Erreur réseau');
        }
    };

    const handleLikeToggle = async (postId) => {
        if (!user) {
            alert('Vous devez être connecté pour interagir.');
            return;
        }

        const isLiked = likedPostIds.includes(postId);

        try {
            if (isLiked) {
                const res = await fetch(`http://localhost:3001/api/likes`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId: user.id, postId }),
                });

                if (res.ok) {
                    setLikedPostIds(prev => prev.filter(id => id !== postId));
                    setPosts(prevPosts =>
                        prevPosts.map(post =>
                            post.id === postId
                                ? { ...post, likesCount: post.likesCount - 1 }
                                : post
                        )
                    );
                } else {
                    const errorData = await res.json();
                    alert(`Erreur: ${errorData.message || 'Impossible de supprimer le like.'}`);
                }
            } else {
                const res = await fetch(`http://localhost:3001/api/likes`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId: user.id, postId }),
                });

                if (res.ok) {
                    setLikedPostIds(prev => [...prev, postId]);
                    setPosts(prevPosts =>
                        prevPosts.map(post =>
                            post.id === postId
                                ? { ...post, likesCount: post.likesCount + 1 }
                                : post
                        )
                    );
                } else {
                    const errorData = await res.json();
                    alert(`Erreur: ${errorData.message || 'Impossible de liker le post.'}`);
                }
            }
        } catch (error) {
            console.error('Erreur lors du like/unlike:', error);
            alert('Erreur réseau');
        }
    };

    // Fonction pour ouvrir le modal de partage
    const handleShareClick = async (post) => {
        if (!user) {
            alert('Vous devez être connecté pour partager.');
            return;
        }

        setSelectedPostToShare(post);
        setIsLoadingFollowers(true);
        setShowShareModal(true);

        try {
            const res = await fetch(`http://localhost:3001/api/follow/followings/${user.id}`);
            if (res.ok) {
                const data = await res.json();
                setFollowers(data);
            } else {
                alert('Erreur lors de la récupération des followers');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des followers:', error);
            alert('Erreur réseau');
        } finally {
            setIsLoadingFollowers(false);
        }
    };

    // Fonction pour créer le contenu HTML avec les images intégrées
    const createHtmlContentWithImages = (postContent, mediaList) => {
        if (!mediaList || mediaList.length === 0) {
            return `J'ai partagé avec vous une publication:\n\n"${postContent || ''}"`;
        }

        // Début du message avec le texte de la publication
        let htmlContent = `J'ai partagé avec vous une publication:\n\n"${postContent || ''}"\n\n`;

        // Ajouter les images directement dans le contenu
        htmlContent += `<div style="margin-top: 15px;">`;

        // Filtrer pour n'inclure que les images
        const imageMedia = mediaList.filter(media => media.type === 'image');
        const otherMedia = mediaList.filter(media => media.type !== 'image');

        // Ajouter les balises img pour chaque image
        if (imageMedia.length > 0) {
            imageMedia.forEach((media, index) => {
                htmlContent += `<img src="${media.url}" alt="Image partagée ${index + 1}" style="max-width: 100%; margin-bottom: 10px; border-radius: 8px;" />`;
            });
        }

        htmlContent += `</div>`;

        // Ajouter les liens pour les autres types de médias (vidéos, audio, etc.)
        if (otherMedia.length > 0) {
            htmlContent += `\n\nAutres médias partagés:\n`;
            otherMedia.forEach((media, index) => {
                htmlContent += `${index + 1}. ${media.type.charAt(0).toUpperCase() + media.type.slice(1)}: ${media.url}\n`;
            });
        }

        return htmlContent;
    };

    // Fonction pour partager avec un follower sélectionné
    const handleShareWithFollower = async (follower) => {
        if (!selectedPostToShare || !follower || !user) return;

        try {
            // 1. Obtenir ou créer une conversation avec le follower
            const conversationRes = await fetch('http://localhost:3001/api/conversations/between', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId1: user.id, userId2: follower.id }),
            });

            if (!conversationRes.ok) {
                throw new Error('Erreur lors de la création/récupération de la conversation');
            }

            const conversation = await conversationRes.json();

            // 2. Préparer le contenu du message avec le texte et les images intégrées
            const postContent = selectedPostToShare.content || '';
            const messageContent = createHtmlContentWithImages(
                postContent,
                selectedPostToShare.media_media_postIdTopost
            );

            // 3. Envoyer le message dans la conversation
            const messageRes = await fetch('http://localhost:3001/api/conversations/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    conversationId: conversation.id,
                    content: messageContent,
                    senderId: user.id,
                    recipientId: follower.id
                }),
            });

            if (!messageRes.ok) {
                throw new Error('Erreur lors de l\'envoi du message');
            }

            // 4. Fermer le modal et afficher une confirmation
            setShowShareModal(false);
            alert(`Publication partagée avec ${follower.username} !`);

        } catch (error) {
            console.error('Erreur lors du partage:', error);
            alert(`Erreur lors du partage: ${error.message}`);
        }
    };

    // Fonctions pour la sidebar et les popups
    const handleShowFollowers = async () => {
        if (!user) {
            alert('Vous devez être connecté pour voir vos followers.');
            return;
        }

        setIsLoadingMyFollowers(true);
        setShowFollowersPopup(true);

        try {
            // Endpoint à adapter selon votre API
            const res = await fetch(`http://localhost:3001/api/follow/followers/${user.id}`);
            if (res.ok) {
                const data = await res.json();
                setMyFollowers(data);
            } else {
                alert('Erreur lors de la récupération de vos followers');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des followers:', error);
            alert('Erreur réseau');
        } finally {
            setIsLoadingMyFollowers(false);
        }
    };

    const handleShowFollowings = async () => {
        if (!user) {
            alert('Vous devez être connecté pour voir vos abonnements.');
            return;
        }

        setIsLoadingMyFollowings(true);
        setShowFollowingsPopup(true);

        try {
            const res = await fetch(`http://localhost:3001/api/follow/followings/${user.id}`);
            if (res.ok) {
                const data = await res.json();
                setMyFollowings(data);
            } else {
                alert('Erreur lors de la récupération de vos abonnements');
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des abonnements:', error);
            alert('Erreur réseau');
        } finally {
            setIsLoadingMyFollowings(false);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    // Styles dynamiques
    const cardStyle = {
        borderRadius: '15px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
        border: 'none',
    };

    const cardHoverStyle = {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
    };

    // Composant Modal pour le partage
    const ShareModal = () => {
        if (!showShareModal) return null;

        return (
            <div className="modal-overlay" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                backdropFilter: 'blur(5px)',
            }}>
                <div className="modal-content" style={{
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    padding: '20px',
                    width: '90%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    overflow: 'auto',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                    animation: 'fadeIn 0.3s ease-out',
                }}>
                    <div className="modal-header" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '15px',
                        borderBottom: '1px solid #eee',
                        paddingBottom: '10px'
                    }}>
                        <h5 style={{ margin: 0, fontWeight: 'bold' }}>Partager avec</h5>
                        <button
                            onClick={() => setShowShareModal(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                padding: '0 5px'
                            }}
                        >
                            &times;
                        </button>
                    </div>

                    <div className="modal-body">
                        {isLoadingFollowers ? (
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div className="spinner" style={{
                                    width: '40px',
                                    height: '40px',
                                    margin: '0 auto',
                                    borderRadius: '50%',
                                    border: '3px solid #f3f3f3',
                                    borderTop: '3px solid #3498db',
                                    animation: 'spin 1s linear infinite',
                                }}></div>
                                <p className="mt-2">Chargement de vos followers...</p>
                            </div>
                        ) : followers.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>😢</div>
                                <p>Vous n'avez pas encore de followers.</p>
                            </div>
                        ) : (
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {followers.map(follower => (
                                    <li
                                        key={follower.id}
                                        onClick={() => handleShareWithFollower(follower)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '10px',
                                            borderBottom: '1px solid #eee',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            borderRadius: '8px',
                                            margin: '5px 0'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#f5f5f5';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <img
                                            src={follower.profilePic || 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}
                                            alt={follower.username}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                marginRight: '15px',
                                                objectFit: 'cover',
                                                border: '2px solid #e1e1e1',
                                            }}
                                        />
                                        <span style={{ fontWeight: '500' }}>{follower.username}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // Composant Popup pour les followers
    const FollowersPopup = () => {
        if (!showFollowersPopup) return null;

        return (
            <div className="modal-overlay" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                backdropFilter: 'blur(5px)',
            }}>
                <div className="modal-content" style={{
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    padding: '20px',
                    width: '90%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    overflow: 'auto',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                    animation: 'slideIn 0.3s ease-out',
                }}>
                    <div className="modal-header" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '15px',
                        borderBottom: '1px solid #eee',
                        paddingBottom: '10px'
                    }}>
                        <h5 style={{ margin: 0, fontWeight: 'bold' }}>Mes followers</h5>
                        <button
                            onClick={() => setShowFollowersPopup(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                padding: '0 5px'
                            }}
                        >
                            &times;
                        </button>
                    </div>

                    <div className="modal-body">
                        {isLoadingMyFollowers ? (
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div className="spinner" style={{
                                    width: '40px',
                                    height: '40px',
                                    margin: '0 auto',
                                    borderRadius: '50%',
                                    border: '3px solid #f3f3f3',
                                    borderTop: '3px solid #3498db',
                                    animation: 'spin 1s linear infinite',
                                }}></div>
                                <p className="mt-2">Chargement de vos followers...</p>
                            </div>
                        ) : myFollowers.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>😢</div>
                                <p>Vous n'avez pas encore de followers.</p>
                            </div>
                        ) : (
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {myFollowers.map(follower => (
                                    <li
                                        key={follower.id}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '12px',
                                            borderBottom: '1px solid #eee',
                                            transition: 'all 0.2s ease',
                                            borderRadius: '8px',
                                            margin: '8px 0',
                                            background: 'linear-gradient(to right, #ffffff, #f8f9fa)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <img
                                            src={follower.profilePic || 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}
                                            alt={follower.username}
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                marginRight: '15px',
                                                objectFit: 'cover',
                                                border: '2px solid #e1e1e1',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                            }}
                                        />
                                        <div>
                                            <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{follower.username}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Vous suit</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // Composant Popup pour les followings
    const FollowingsPopup = () => {
        if (!showFollowingsPopup) return null;

        return (
            <div className="modal-overlay" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                backdropFilter: 'blur(5px)',
            }}>
                <div className="modal-content" style={{
                    backgroundColor: 'white',
                    borderRadius: '15px',
                    padding: '20px',
                    width: '90%',
                    maxWidth: '500px',
                    maxHeight: '80vh',
                    overflow: 'auto',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                    animation: 'slideIn 0.3s ease-out',
                }}>
                    <div className="modal-header" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '15px',
                        borderBottom: '1px solid #eee',
                        paddingBottom: '10px'
                    }}>
                        <h5 style={{ margin: 0, fontWeight: 'bold' }}>Mes abonnements</h5>
                        <button
                            onClick={() => setShowFollowingsPopup(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                padding: '0 5px'
                            }}
                        >
                            &times;
                        </button>
                    </div>

                    <div className="modal-body">
                        {isLoadingMyFollowings ? (
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div className="spinner" style={{
                                    width: '40px',
                                    height: '40px',
                                    margin: '0 auto',
                                    borderRadius: '50%',
                                    border: '3px solid #f3f3f3',
                                    borderTop: '3px solid #3498db',
                                    animation: 'spin 1s linear infinite',
                                }}></div>
                                <p className="mt-2">Chargement de vos abonnements...</p>
                            </div>
                        ) : myFollowings.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🔍</div>
                                <p>Vous ne suivez personne pour le moment.</p>
                            </div>
                        ) : (
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {myFollowings.map(following => (
                                    <li
                                        key={following.id}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '12px',
                                            borderBottom: '1px solid #eee',
                                            transition: 'all 0.2s ease',
                                            borderRadius: '8px',
                                            margin: '8px 0',
                                            background: 'linear-gradient(to right, #ffffff, #f8f9fa)',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = 'none';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <img
                                            src={following.profilePic || 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}
                                            alt={following.username}
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                marginRight: '15px',
                                                objectFit: 'cover',
                                                border: '2px solid #e1e1e1',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                            }}
                                        />
                                        <div>
                                            <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>{following.username}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#666' }}>Vous le suivez</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // Composant Sidebar
    const Sidebar = () => {
        return (
            <div className="sidebar" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: isSidebarCollapsed ? '60px' : '250px',
                backgroundColor: '#ffffff',
                boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                padding: '20px 0',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
            }}>
                <div className="sidebar-header" style={{
                    display: 'flex',
                    justifyContent: isSidebarCollapsed ? 'center' : 'space-between',
                    alignItems: 'center',
                    padding: isSidebarCollapsed ? '0 10px' : '0 20px',
                    marginBottom: '30px',
                }}>
                    {!isSidebarCollapsed && (
                        <h3 style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>Menu</h3>
                    )}
                    <button
                        onClick={toggleSidebar}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: '#555',
                            padding: '5px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            transition: 'background-color 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        {isSidebarCollapsed ? '→' : '←'}
                    </button>
                </div>

                <div className="sidebar-content" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                }}>
                    {user && (
                        <div className="user-info" style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: isSidebarCollapsed ? '10px' : '10px 20px',
                            marginBottom: '20px',
                            borderBottom: '1px solid #eee',
                            paddingBottom: '20px',
                        }}>
                            <Link href={`/profile`}>
                            <img
                                src={user.profilePic || '/default-avatar.png'}
                                alt="Profil"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    marginRight: isSidebarCollapsed ? '0' : '15px',
                                    objectFit: 'cover',
                                    border: '2px solid #3498db',
                                }}
                            />
                            </Link>
                            {!isSidebarCollapsed && (
                                <div>
                                    <div style={{ fontWeight: '600', fontSize: '1rem' }}>{user.username}</div>
                                    <div style={{ fontSize: '0.8rem', color: '#666' }}>En ligne</div>
                                </div>
                            )}

                        </div>
                    )}

                    <button
                        className="sidebar-button"
                        onClick={handleShowFollowers}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: isSidebarCollapsed ? '15px 0' : '12px 20px',
                            marginBottom: '10px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            borderRadius: '0 20px 20px 0',
                            justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                            width: '100%',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f0f0f0';
                            e.currentTarget.style.paddingLeft = isSidebarCollapsed ? '0' : '25px';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.paddingLeft = isSidebarCollapsed ? '0' : '20px';
                        }}
                    >
                        <span style={{
                            fontSize: '1.2rem',
                            marginRight: isSidebarCollapsed ? '0' : '15px',
                            color: '#3498db',
                        }}>👥</span>
                        {!isSidebarCollapsed && (
                            <span style={{ fontWeight: '500' }}>Mes followers</span>
                        )}
                    </button>

                    <button
                        className="sidebar-button"
                        onClick={handleShowFollowings}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: isSidebarCollapsed ? '15px 0' : '12px 20px',
                            marginBottom: '10px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            borderRadius: '0 20px 20px 0',
                            justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                            width: '100%',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f0f0f0';
                            e.currentTarget.style.paddingLeft = isSidebarCollapsed ? '0' : '25px';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.paddingLeft = isSidebarCollapsed ? '0' : '20px';
                        }}
                    >
                        <span style={{
                            fontSize: '1.2rem',
                            marginRight: isSidebarCollapsed ? '0' : '15px',
                            color: '#3498db',
                        }}>🔍</span>
                        {!isSidebarCollapsed && (
                            <span style={{ fontWeight: '500' }}>Mes abonnements</span>
                        )}
                    </button>

                    <Link href="/" className="sidebar-button" style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: isSidebarCollapsed ? '15px 0' : '12px 20px',
                        marginBottom: '10px',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.2s ease',
                        borderRadius: '0 20px 20px 0',
                        justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                    }}
                          onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f0f0f0';
                              e.currentTarget.style.paddingLeft = isSidebarCollapsed ? '0' : '25px';
                          }}
                          onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.paddingLeft = isSidebarCollapsed ? '0' : '20px';
                          }}>
                        <span style={{
                            fontSize: '1.2rem',
                            marginRight: isSidebarCollapsed ? '0' : '15px',
                            color: '#3498db',
                        }}>🏠</span>
                        {!isSidebarCollapsed && (
                            <span style={{ fontWeight: '500' }}>Accueil</span>
                        )}
                    </Link>

                    <Link href="/conversation" className="sidebar-button" style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: isSidebarCollapsed ? '15px 0' : '12px 20px',
                        marginBottom: '10px',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.2s ease',
                        borderRadius: '0 20px 20px 0',
                        justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                    }}
                          onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f0f0f0';
                              e.currentTarget.style.paddingLeft = isSidebarCollapsed ? '0' : '25px';
                          }}
                          onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.paddingLeft = isSidebarCollapsed ? '0' : '20px';
                          }}>
                        <span style={{
                            fontSize: '1.2rem',
                            marginRight: isSidebarCollapsed ? '0' : '15px',
                            color: '#3498db',
                        }}>💬</span>
                        {!isSidebarCollapsed && (
                            <span style={{ fontWeight: '500' }}>Messages</span>
                        )}
                    </Link>
                </div>
            </div>
        );
    };

    // Composant MediaCarousel
    function MediaCarousel({ mediaList }) {
        const [currentIndex, setCurrentIndex] = useState(0);

        if (!mediaList || mediaList.length === 0) return null;

        const currentMedia = mediaList[currentIndex];

        const prev = () => {
            setCurrentIndex((idx) => (idx === 0 ? mediaList.length - 1 : idx - 1));
        };

        const next = () => {
            setCurrentIndex((idx) => (idx === mediaList.length - 1 ? 0 : idx + 1));
        };

        return (
            <div
                className="media-carousel position-relative mb-4"
                style={{
                    maxHeight: '350px',
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: '15px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    userSelect: 'none',
                    backgroundColor: '#f8f9fa',
                }}
            >
                <div
                    key={currentMedia.id}
                    className="media-container"
                    style={{
                        transition: 'opacity 0.5s ease',
                        opacity: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '350px',
                    }}
                >
                    {currentMedia.type === 'image' && (
                        <img
                            src={currentMedia.url}
                            alt="media"
                            style={{ maxHeight: '350px', width: 'auto', borderRadius: '15px', objectFit: 'cover' }}
                        />
                    )}
                    {currentMedia.type === 'video' && (
                        <video
                            src={currentMedia.url}
                            controls
                            style={{ maxHeight: '350px', width: 'auto', borderRadius: '15px', objectFit: 'cover' }}
                        />
                    )}
                    {currentMedia.type === 'audio' && (
                        <audio src={currentMedia.url} controls style={{ width: '100%', marginTop: '1rem' }} />
                    )}
                </div>

                {/* Navigation flèches */}
                {mediaList.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '10px',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '35px',
                                height: '35px',
                                color: 'white',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                userSelect: 'none',
                                transition: 'background-color 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'}
                            aria-label="Précédent"
                        >
                            ‹
                        </button>
                        <button
                            onClick={next}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '35px',
                                height: '35px',
                                color: 'white',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                userSelect: 'none',
                                transition: 'background-color 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'}
                            aria-label="Suivant"
                        >
                            ›
                        </button>
                    </>
                )}
            </div>
        );
    }

    // Styles CSS pour les animations
    const cssAnimations = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

    return (
        <>
            <style>{cssAnimations}</style>

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="main-content" style={{
                marginLeft: isSidebarCollapsed ? '60px' : '250px',
                transition: 'margin-left 0.3s ease',
                padding: '20px',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
            }}>
                <div className="container py-4" style={{ maxWidth: '650px' }}>
                    <h2
                        className="text-center fw-bold mb-4"
                        style={{
                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                            color: '#2c3e50',
                            position: 'relative',
                            display: 'inline-block',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            padding: '0 15px 10px',
                            borderBottom: '3px solid #3498db',
                        }}
                    >
                        Fil d'actualité
                    </h2>

                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="card mb-4"
                            style={hoveredCardId === post.id ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
                            onMouseEnter={() => setHoveredCardId(post.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                        >
                            <div className="card-body">
                                {/* Header */}
                                <div className="d-flex align-items-center mb-3">
                                    <Link href={`/detail_profile/${post.user_post_userIdTouser?.id || ''}`} className="d-flex align-items-center text-decoration-none text-dark">
                                        <img
                                            src={post.user_post_userIdTouser?.profilePic || '/default-avatar.png'}
                                            alt="Avatar"
                                            className="rounded-circle me-3"
                                            style={{
                                                width: '55px',
                                                height: '55px',
                                                objectFit: 'cover',
                                                border: '2px solid #3498db',
                                                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                                                transition: 'transform 0.2s ease',
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                        <div>
                                            <h6 className="mb-0 fw-bold" style={{ fontSize: '1.1rem', color: '#2c3e50' }}>
                                                {post.user_post_userIdTouser?.username || 'Utilisateur inconnu'}
                                            </h6>
                                            <small className="text-muted" style={{ fontSize: '0.85rem' }}>
                                                {new Date(post.createdAt).toLocaleString()}
                                            </small>
                                        </div>
                                    </Link>
                                </div>

                                {/* Contenu */}
                                <p className="mb-4" style={{ fontSize: '1rem', lineHeight: '1.5', color: '#444' }}>
                                    {post.content}
                                </p>

                                {/* Médias */}
                                <MediaCarousel mediaList={post.media_media_postIdTopost} />

                                {/* Actions */}
                                <div className="d-flex justify-content-around pt-2 mt-3 border-top align-items-center">
                                    <button
                                        className={`btn btn-link text-decoration-none fw-semibold d-flex align-items-center ${
                                            likedPostIds.includes(post.id) ? 'text-danger' : 'text-muted'
                                        }`}
                                        onClick={() => handleLikeToggle(post.id)}
                                        style={{
                                            gap: '6px',
                                            fontSize: '1.1rem',
                                            transition: 'transform 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        {likedPostIds.includes(post.id) ? '❤️' : '🤍'} {/* cœur rempli ou vide */}
                                        <span>{post.likesCount}</span>
                                    </button>

                                    <button
                                        className="btn btn-link text-decoration-none text-muted fw-semibold"
                                        style={{
                                            transition: 'transform 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        💬 Commenter
                                    </button>

                                    <button
                                        className="btn btn-link text-decoration-none text-muted fw-semibold"
                                        onClick={() => handleShareClick(post)}
                                        style={{
                                            transition: 'transform 0.2s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    >
                                        🔁 Partager
                                    </button>
                                </div>

                                {/* Section commentaires (apparaît au survol) */}
                                {hoveredCardId === post.id && (
                                    <div className="comments-section mt-4 border-top pt-3" style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
                                        <h6 className="fw-bold mb-3">Commentaires</h6>
                                        {comments[post.id]?.length > 0 ? (
                                            comments[post.id].map((comment) => (
                                                <div key={comment.id} className="d-flex mb-3" style={{ animation: 'slideIn 0.3s ease-in-out' }}>
                                                    <Link href={`/detail_profile/${comment.user?.id || ''}`}>
                                                        <img
                                                            src={comment.user?.profilePic || '/default-avatar.png'}
                                                            alt="Avatar"
                                                            className="rounded-circle me-2"
                                                            style={{
                                                                width: '40px',
                                                                height: '40px',
                                                                objectFit: 'cover',
                                                                border: '2px solid #e1e1e1',
                                                            }}
                                                        />
                                                    </Link>
                                                    <div className="flex-grow-1 ms-2">
                                                        <div className="bg-light p-2 rounded" style={{
                                                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                                            background: 'linear-gradient(to right, #f9f9f9, #f5f5f5)',
                                                        }}>
                                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                                <Link href={`/detail_profile/${comment.user?.id || ''}`} className="text-decoration-none">
                                                                    <small className="fw-bold text-dark">{comment.user?.username || 'Utilisateur inconnu'}</small>
                                                                </Link>
                                                                <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                                                                    {new Date(comment.createdAt).toLocaleString()}
                                                                </small>
                                                            </div>
                                                            {editCommentId === comment.id ? (
                                                                <div className="d-flex">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-sm me-2"
                                                                        value={editedContent}
                                                                        onChange={(e) => setEditedContent(e.target.value)}
                                                                        style={{ borderRadius: '20px' }}
                                                                    />
                                                                    <button
                                                                        className="btn btn-sm btn-primary"
                                                                        onClick={() => handleSaveEdit(comment.id, post.id)}
                                                                        style={{ borderRadius: '20px' }}
                                                                    >
                                                                        Enregistrer
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <p className="mb-0" style={{ fontSize: '0.9rem' }}>
                                                                    {comment.content}
                                                                </p>
                                                            )}
                                                        </div>
                                                        {user && comment.userId === user.id && !editCommentId && (
                                                            <div className="mt-1">
                                                                <button
                                                                    className="btn btn-link btn-sm p-0 text-muted me-2"
                                                                    onClick={() => handleEditComment(comment)}
                                                                    style={{ fontSize: '0.8rem' }}
                                                                >
                                                                    Modifier
                                                                </button>
                                                                <button
                                                                    className="btn btn-link btn-sm p-0 text-danger"
                                                                    onClick={() => handleDeleteComment(comment.id, post.id)}
                                                                    style={{ fontSize: '0.8rem' }}
                                                                >
                                                                    Supprimer
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-muted fst-italic">Aucun commentaire pour l'instant.</p>
                                        )}

                                        {/* Formulaire d'ajout de commentaire */}
                                        {user && (
                                            <div className="d-flex mt-3">
                                                <img
                                                    src={user.profilePic || '/default-avatar.png'}
                                                    alt="Avatar"
                                                    className="rounded-circle me-2"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        objectFit: 'cover',
                                                        border: '2px solid #3498db',
                                                    }}
                                                />
                                                <div className="flex-grow-1">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Ajouter un commentaire..."
                                                            value={newCommentContent[post.id] || ''}
                                                            onChange={(e) =>
                                                                setNewCommentContent((prev) => ({
                                                                    ...prev,
                                                                    [post.id]: e.target.value,
                                                                }))
                                                            }
                                                            onKeyPress={(e) => {
                                                                if (e.key === 'Enter') {
                                                                    handleAddComment(post.id);
                                                                }
                                                            }}
                                                            style={{
                                                                borderRadius: '20px 0 0 20px',
                                                                border: '1px solid #ddd',
                                                            }}
                                                        />
                                                        <button
                                                            className="btn btn-primary"
                                                            onClick={() => handleAddComment(post.id)}
                                                            style={{
                                                                borderRadius: '0 20px 20px 0',
                                                                background: 'linear-gradient(to right, #3498db, #2980b9)',
                                                                border: 'none',
                                                            }}
                                                        >
                                                            Envoyer
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modals */}
            <ShareModal />
            <FollowersPopup />
            <FollowingsPopup />
        </>
    );
}
