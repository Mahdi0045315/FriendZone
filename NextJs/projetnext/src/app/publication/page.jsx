'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePostPage() {
    const [content, setContent] = useState('');
    const [media, setMedia] = useState([{ url: '', type: '' }]);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleMediaChange = (index, field, value) => {
        const updatedMedia = [...media];
        updatedMedia[index][field] = value;
        setMedia(updatedMedia);
    };

    const addMediaField = () => {
        setMedia([...media, { url: '', type: '' }]);
    };

    const handleCreatePost = async () => {
        setMessage('');
        try {
            const res = await fetch('http://localhost:3001/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ content, media })
            });

            if (res.status === 401) {
                setMessage('❌ Vous devez être connecté pour publier.');
                setTimeout(() => router.push('/auth/login'), 1500);
                return;
            }

            const data = await res.json();

            if (res.ok) {
                setMessage('✅ Publication créée avec succès !');
                setContent('');
                setMedia([{ url: '', type: '' }]);
            } else {
                setMessage(data.error || '❌ Erreur lors de la création du post');
            }
        } catch (err) {
            setMessage('❌ Erreur réseau ou serveur');
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Créer une publication</h2>

            <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Contenu</label>
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                    rows={4}
                    placeholder="Exprimez-vous..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            {media.map((m, i) => (
                <div key={i} className="mb-4">
                    <div className="mb-2">
                        <label className="block text-gray-600 font-medium mb-1">URL du média</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="https://..."
                            value={m.url}
                            onChange={(e) => handleMediaChange(i, 'url', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Type</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            value={m.type}
                            onChange={(e) => handleMediaChange(i, 'type', e.target.value)}
                        >
                            <option value="">-- Sélectionner --</option>
                            <option value="image">Image</option>
                            <option value="video">Vidéo</option>
                            <option value="audio">Audio</option>
                        </select>
                    </div>
                </div>
            ))}

            <button
                className="mb-4 px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                onClick={addMediaField}
            >
                + Ajouter un média
            </button>

            <button
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
                onClick={handleCreatePost}
            >
                Publier
            </button>

            {message && (
                <div className={`mt-4 p-3 rounded-lg text-sm font-medium ${message.startsWith('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-700'}`}>
                    {message}
                </div>
            )}
        </div>
    );
}
