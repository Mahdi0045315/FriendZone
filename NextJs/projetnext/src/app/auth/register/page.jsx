'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';

export default function RegisterPage() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await register(username, email, password);
        if (res.user) router.push('/');
        else alert(res.error || 'Erreur lors de l’inscription');
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: 20,
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: 'white',
                    padding: '40px 30px',
                    borderRadius: 20,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    width: '100%',
                    maxWidth: 400,
                    boxSizing: 'border-box',
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: 30, color: '#333' }}>Créer un compte</h2>

                <label style={{ fontWeight: 600, color: '#555', marginBottom: 8, display: 'block' }}>
                    Nom d'utilisateur
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                    required
                    placeholder="Votre nom d'utilisateur"
                    style={{
                        width: '100%',
                        padding: '12px 15px',
                        marginBottom: 20,
                        borderRadius: 10,
                        border: '1.5px solid #ccc',
                        fontSize: 16,
                        transition: 'border-color 0.3s',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#6B73FF')}
                    onBlur={e => (e.target.style.borderColor = '#ccc')}
                />

                <label style={{ fontWeight: 600, color: '#555', marginBottom: 8, display: 'block' }}>
                    Email
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="exemple@mail.com"
                    style={{
                        width: '100%',
                        padding: '12px 15px',
                        marginBottom: 20,
                        borderRadius: 10,
                        border: '1.5px solid #ccc',
                        fontSize: 16,
                        transition: 'border-color 0.3s',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#6B73FF')}
                    onBlur={e => (e.target.style.borderColor = '#ccc')}
                />

                <label style={{ fontWeight: 600, color: '#555', marginBottom: 8, display: 'block' }}>
                    Mot de passe
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    placeholder="Votre mot de passe"
                    style={{
                        width: '100%',
                        padding: '12px 15px',
                        marginBottom: 30,
                        borderRadius: 10,
                        border: '1.5px solid #ccc',
                        fontSize: 16,
                        transition: 'border-color 0.3s',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#6B73FF')}
                    onBlur={e => (e.target.style.borderColor = '#ccc')}
                />

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '15px',
                        borderRadius: 15,
                        border: 'none',
                        background: 'linear-gradient(90deg, #6B73FF, #000DFF)',
                        color: 'white',
                        fontSize: 18,
                        fontWeight: '700',
                        cursor: 'pointer',
                        boxShadow: '0 5px 15px rgba(107,115,255,0.6)',
                        transition: 'background 0.3s',
                    }}
                    onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #000DFF, #6B73FF)'}
                    onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #6B73FF, #000DFF)'}
                >
                    S’inscrire
                </button>
            </form>
        </div>
    );
}
