'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react'; // 🔑 pour récupérer l'utilisateur connecté

export default function CreatePost({ onPostCreated }) {
    const { data: session, status } = useSession();
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        if (!content.trim()) return;
        if (!session?.user?.id) {
            setError("Vous devez être connecté pour publier.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const res = await fetch('http://localhost:3001/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content,
                    userId: session.user.id, // ✅ récupéré depuis la session
                    images: [],
                    videos: [],
                }),
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.error || 'Erreur création post');
            }

            const newPost = await res.json();
            onPostCreated?.(newPost); // optionnel
            setContent('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (status === 'loading') return <p>Chargement...</p>;
    if (status === 'unauthenticated') return <p>Veuillez vous connecter pour publier.</p>;

    return (
        <div className="mb-6 p-4 border rounded bg-white">
      <textarea
          rows={3}
          className="w-full p-2 border rounded"
          placeholder="Exprimez-vous..."
          value={content}
          onChange={e => setContent(e.target.value)}
      />
            {error && <p className="text-red-500 mt-1">{error}</p>}
            <button
                onClick={handleSubmit}
                disabled={loading}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                {loading ? 'Publication...' : 'Publier'}
            </button>
        </div>
    );
}
