'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSession } from '../../../../lib/api';

export default function EditProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        profilePic: '',
        coverPic: '',
        bio: '',
    });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getSession();

                if (res?.user) {
                    setUser(res.user);
                    setFormData({
                        username: res.user.username || '',
                        email: res.user.email || '',
                        password: '',
                        profilePic: res.user.profilePic || '',
                        coverPic: res.user.coverPic || '',
                        bio: res.user.bio || '',
                    });
                } else {
                    router.push('/auth/login');
                }
            } catch (err) {
                console.error('Erreur session :', err);
                router.push('/auth/login');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const res = await fetch(`http://localhost:3001/api/users/${user.id}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('✅ Profil mis à jour avec succès.');
                setTimeout(() => router.push('/profile'), 1200);
            } else {
                setMessage(data.message || '❌ Erreur lors de la mise à jour.');
            }
        } catch (err) {
            console.error('Erreur mise à jour :', err);
            setMessage('❌ Erreur réseau ou serveur.');
        }
    };

    if (loading) return <div className="text-center mt-10 text-gray-600">Chargement...</div>;

    return (
        <div className="max-w-xl mx-auto mt-10 px-4">
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Modifier le Profil</h2>

                {message && (
                    <div className={`mb-4 p-3 rounded-md text-sm font-medium ${message.startsWith('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1">Nom d'utilisateur</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Nouveau mot de passe (facultatif)</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Photo de profil (URL)</label>
                        <input
                            type="text"
                            name="profilePic"
                            value={formData.profilePic}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Photo de couverture (URL)</label>
                        <input
                            type="text"
                            name="coverPic"
                            value={formData.coverPic}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-1">Bio</label>
                        <textarea
                            name="bio"
                            rows="3"
                            value={formData.bio}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    <div className="flex justify-between pt-4">
                        <button
                            type="button"
                            onClick={() => router.push('/profile')}
                            className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
