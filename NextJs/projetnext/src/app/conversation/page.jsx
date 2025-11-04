'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useAuth } from '@/context/AuthContext'; // ajuste le chemin si besoin
import Link from 'next/link';
// Hook pour charger les suivis
function useFollowing(userId) {
    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) return;

        async function fetchFollowing() {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`http://localhost:3001/api/follow/followings/${userId}`);
                if (!res.ok) throw new Error('Erreur lors du chargement des utilisateurs suivis');
                const data = await res.json();
                setFollowing(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchFollowing();
    }, [userId]);

    return { following, loading, error };
}

// Hook pour charger la conversation
function useConversation(userId1, userId2) {
    const [conversation, setConversation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchConversation = useCallback(async () => {
        if (!userId1 || !userId2) {
            setConversation(null);
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`http://localhost:3001/api/conversation/between`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId1, userId2 }),
            });
            if (!res.ok) throw new Error('Erreur lors du chargement de la conversation');
            const data = await res.json();
            setConversation(data);
        } catch (err) {
            setError(err.message);
            setConversation(null);
        } finally {
            setLoading(false);
        }
    }, [userId1, userId2]);

    useEffect(() => {
        fetchConversation();
    }, [fetchConversation]);

    return { conversation, setConversation, loading, error };
}

// Composant principal
export default function ConversationPage({ postToShare = null }) { // 🔥 Prop pour le post à partager
    const { user } = useAuth();
    const userId = user?.id;

    const [selectedUser, setSelectedUser] = useState(null);
    const { following, loading: loadingFollowing, error: followingError } = useFollowing(userId);

    const {
        conversation,
        setConversation,
        loading: loadingConvo,
        error: conversationError,
    } = useConversation(userId, selectedUser?.id);

    const [messageContent, setMessageContent] = useState('');
    const [sending, setSending] = useState(false);
    const messagesEndRef = useRef(null);

    function getUsernameById(id) {
        if (id === userId) return user.username;
        if (id === selectedUser?.id) return selectedUser.username;
        const userFound = following.find(u => u.id === id);
        return userFound ? userFound.username : 'Expéditeur';
    }

    function getUserById(id) {
        if (id === userId) return user;
        if (id === selectedUser?.id) return selectedUser;
        return following.find(u => u.id === id);
    }

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [conversation?.messages]);

    async function sendMessage(content = null) {
        if (sending) return;
        if (!conversation || !selectedUser) return;

        const messageToSend = content !== null ? content : messageContent.trim();
        if (!messageToSend) return;

        setSending(true);
        try {
            const res = await fetch(`http://localhost:3001/api/conversation/${conversation.id}/messages`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: messageToSend,
                    senderId: userId,
                    recipientId: selectedUser.id,
                }),
            });

            if (!res.ok) throw new Error('Erreur lors de l’envoi du message');
            const newMsg = await res.json();

            setConversation(prev => ({
                ...prev,
                messages: [...(prev?.messages || []), newMsg],
            }));

            if (content === null) setMessageContent('');
        } catch (err) {
            alert(err.message);
        } finally {
            setSending(false);
        }
    }

    if (!userId) return <p>Chargement de la session...</p>;

    // 🔥 Fonction partage post
    function handleSharePost() {
        if (!postToShare) return;
        const postLink = `https://tonsite.com/posts/${postToShare.id}`;
        const shareMessage = `📢 Je partage ce post avec toi : ${postToShare.content || '[Contenu du post]'}\nVoir le post ici : ${postLink}`;
        sendMessage(shareMessage);
    }

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            maxWidth: 1200,
            margin: 'auto',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            background: '#fff',
        }}>

            {/* Sidebar */}
            <aside style={{
                width: 280,
                borderRight: '1px solid #eee',
                padding: 20,
                background: '#f9f9f9',
                overflowY: 'auto',
            }}>
                <h2 style={{ marginBottom: 16, fontSize: 20, fontWeight: '600' }}>👥 Abonnements</h2>
                {loadingFollowing && <p>Chargement...</p>}
                {followingError && <p style={{ color: 'red' }}>{followingError}</p>}
                {!loadingFollowing && following.length === 0 && <p>Tu ne suis personne.</p>}

                <ul style={{ listStyle: 'none', padding: 0, marginTop: 10 }}>
                    {following.map(user => (
                        <li
                            key={user.id}
                            onClick={() => setSelectedUser(user)}
                            style={{
                                cursor: 'pointer',
                                padding: '10px 14px',
                                borderRadius: 12,
                                marginBottom: 8,
                                backgroundColor: selectedUser?.id === user.id ? '#dbeafe' : 'transparent',
                                transition: 'background 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                            }}
                        >
                            <img
                                src={user.profilePic || '/default-avatar.png'}
                                alt={user.username}
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    border: '2px solid #e2e8f0',
                                }}
                            />
                            <span style={{ fontWeight: '500', color: '#333' }}>{user.username}</span>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main section */}
            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: 24,
                background: '#fefefe',
            }}>
                {!selectedUser ? (
                    <p style={{ color: '#666', fontStyle: 'italic' }}>← Sélectionne un utilisateur à gauche pour discuter</p>
                ) : loadingConvo ? (
                    <p>Chargement de la conversation...</p>
                ) : conversationError ? (
                    <p style={{ color: 'red' }}>{conversationError}</p>
                ) : (
                    <>
                        <h2 style={{ fontSize: 20, fontWeight: '600', marginBottom: 12 }}>
                            💬 Conversation avec {selectedUser?.username}
                        </h2>

                        {/* Bouton de partage */}
                        {postToShare && (
                            <div style={{ marginBottom: 16 }}>
                                <button
                                    onClick={handleSharePost}
                                    disabled={sending}
                                    style={{
                                        padding: '10px 20px',
                                        background: sending ? '#ccc' : '#10b981',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: 8,
                                        cursor: sending ? 'not-allowed' : 'pointer',
                                        transition: 'background 0.3s',
                                        fontWeight: '500',
                                    }}
                                >
                                    {sending ? 'Partage en cours...' : '📎 Partager ce post'}
                                </button>
                            </div>
                        )}

                        {/* Messages */}
                        <div style={{
                            flex: 1,
                            overflowY: 'auto',
                            backgroundColor: '#f1f5f9',
                            padding: 16,
                            borderRadius: 12,
                            border: '1px solid #e2e8f0',
                            marginBottom: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                        }}>
                            {conversation?.messages?.length > 0 ? (
                                conversation.messages.map((msg, i) => {
                                    const key = msg.id || `msg-${i}`;
                                    const msgUser = getUserById(msg.senderId);
                                    const isOwn = msg.senderId === userId;

                                    return (
                                        <div key={key} style={{
                                            alignSelf: isOwn ? 'flex-end' : 'flex-start',
                                            background: isOwn ? '#d1fae5' : '#fff',
                                            padding: '10px 14px',
                                            borderRadius: 14,
                                            maxWidth: '70%',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
                                            display: 'flex',
                                            gap: 10,
                                        }}>
                                            <Link href={`/detail_profile/${msgUser?.id}`} passHref>
                                                <img
                                                    src={msgUser?.profilePic || '/default-avatar.png'}
                                                    alt={msgUser?.username}
                                                    style={{
                                                        width: 32,
                                                        height: 32,
                                                        borderRadius: '50%',
                                                        objectFit: 'cover',
                                                        cursor: 'pointer', // Optional for better UX
                                                    }}
                                                />
                                            </Link>
                                            <div>
                                                <p style={{ margin: 0, fontWeight: '500', color: '#111' }}>
                                                    {msgUser?.username || 'Expéditeur'}
                                                </p>
                                                <p style={{ margin: '4px 0', whiteSpace: 'pre-wrap' }}>{msg.content}</p>
                                                <small style={{ fontSize: 11, color: '#666' }}>
                                                    {new Date(msg.createdAt).toLocaleString()}
                                                </small>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <p style={{ fontStyle: 'italic', color: '#777' }}>Aucun message</p>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Formulaire envoi */}
                        <div style={{ display: 'flex', gap: 10 }}>
                            <input
                                type="text"
                                value={messageContent}
                                onChange={e => setMessageContent(e.target.value)}
                                placeholder="Écrire un message..."
                                onKeyDown={e => { if (e.key === 'Enter') sendMessage(); }}
                                disabled={sending}
                                style={{
                                    flex: 1,
                                    padding: '12px 16px',
                                    fontSize: 16,
                                    borderRadius: 8,
                                    border: '1px solid #ccc',
                                }}
                            />
                            <button
                                onClick={() => sendMessage()}
                                disabled={sending}
                                style={{
                                    padding: '12px 20px',
                                    fontSize: 16,
                                    borderRadius: 8,
                                    backgroundColor: sending ? '#aaa' : '#3b82f6',
                                    color: '#fff',
                                    border: 'none',
                                    cursor: sending ? 'not-allowed' : 'pointer',
                                    transition: 'background 0.2s',
                                }}
                            >
                                {sending ? 'Envoi...' : 'Envoyer'}
                            </button>
                        </div>
                    </>
                )}
            </main>
        </div>

    );
}
