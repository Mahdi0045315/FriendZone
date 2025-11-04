'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../lib/api';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(email, password);
        if (res.user) router.push('/'); // Redirection vers la page de profil
        else alert(res.error || 'Erreur lors de la connexion');
    };

    const goToRegister = () => {
        router.push('/auth/register');
    };

    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            backgroundColor: '#f0f2f5',
        }}>
            {/* Partie image / illustration */}
            <div style={{
                flex: 1,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'none',
                '@media(min-width: 768px)': { display: 'block' }
            }} />

            {/* Formulaire */}
            <div style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 40,
            }}>
                <div style={{
                    background: 'white',
                    padding: 40,
                    borderRadius: 16,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    width: '100%',
                    maxWidth: 420,
                }}>
                    <h2 style={{ textAlign: 'center', marginBottom: 32, color: '#333' }}>Connexion</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: 8, color: '#555', fontWeight: '600' }}>
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Entrez votre email"
                            required
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                marginBottom: 20,
                                borderRadius: 8,
                                border: '1px solid #ccc',
                                fontSize: 16,
                                transition: 'border-color 0.3s',
                            }}
                            onFocus={e => (e.target.style.borderColor = '#4A90E2')}
                            onBlur={e => (e.target.style.borderColor = '#ccc')}
                        />

                        <label htmlFor="password" style={{ display: 'block', marginBottom: 8, color: '#555', fontWeight: '600' }}>
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Entrez votre mot de passe"
                            required
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                marginBottom: 30,
                                borderRadius: 8,
                                border: '1px solid #ccc',
                                fontSize: 16,
                                transition: 'border-color 0.3s',
                            }}
                            onFocus={e => (e.target.style.borderColor = '#4A90E2')}
                            onBlur={e => (e.target.style.borderColor = '#ccc')}
                        />

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: 14,
                                borderRadius: 10,
                                border: 'none',
                                backgroundColor: '#4A90E2',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: 18,
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(74,144,226,0.5)',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#357ABD')}
                            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#4A90E2')}
                        >
                            Se connecter
                        </button>

                        <button
                            type="button"
                            onClick={goToRegister}
                            style={{
                                marginTop: 15,
                                width: '100%',
                                padding: 14,
                                borderRadius: 10,
                                border: '2px solid #4A90E2',
                                backgroundColor: 'white',
                                color: '#4A90E2',
                                fontWeight: '700',
                                fontSize: 16,
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.backgroundColor = '#4A90E2';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.backgroundColor = 'white';
                                e.currentTarget.style.color = '#4A90E2';
                            }}
                        >
                            Créer un compte
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
