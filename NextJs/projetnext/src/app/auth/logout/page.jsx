'use client';

import { useEffect } from 'react';
import { login } from '../../../../lib/api';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        const doLogout = async () => {
            await logout();
            router.push('/auth/login'); // redirection après déconnexion
        };
        doLogout();
    }, [router]);

    return <p>Déconnexion en cours...</p>;
}