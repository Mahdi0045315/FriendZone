'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
    Home,
    User,
    MessageCircle,
    Settings,
    UserPlus,
    Users,
    LogOut,
    Bell,
    Search
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import NotificationDropdown from './NotificationDropdown';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = async () => {
        await logout();
        router.push('/auth/login');
        router.refresh();
    };

    const navLinks = [
        {
            href: '/',
            label: 'Accueil',
            icon: <Home size={20} />,
            exact: true
        },
        {
            href: user?.id ? `/profile` : '/auth/login',
            label: 'Profil',
            icon: <User size={20} />
        },
        {
            href: '/conversation',
            label: 'Messages',
            icon: <MessageCircle size={20} />
        },
    ];

    const userLinks = [
        {
            href: '/all_users',
            label: 'Amis',
            icon: <UserPlus size={18} />
        },
    ];

    return (
        <motion.nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-gradient-to-r from-blue-600 to-blue-400'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
                <div className="flex items-center justify-between h-12">

                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/"
                            className="flex items-center text-2xl font-bold tracking-wider pl-10"
                        >
                            <span className={`${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                                🕺 FriendZone
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map(({ href, label, icon, exact }) => (
                            <motion.div
                                key={href}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={href}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium relative ${
                                        (exact ? pathname === href : pathname.startsWith(href))
                                            ? `${isScrolled ? 'bg-blue-100 text-blue-700' : 'bg-white/20 text-white'}`
                                            : `${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}`
                                    }`}
                                >
                                    {icon}
                                    <span>{label}</span>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Notifications */}
                        {user && (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <NotificationDropdown user={user} isScrolled={isScrolled} />
                            </motion.div>
                        )}

                        {/* User Section */}
                        {user ? (
                            <div className="flex items-center gap-2 ml-4">
                                <div className="relative group">
                                    <button
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} font-medium shadow-md`}
                                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                                    >
                                        <img
                                            src={user.profilePic || 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}
                                            alt="Profile"
                                            className="w-8 h-8 rounded-full object-cover border-2 border-white"
                                        />
                                        <span className="hidden lg:inline">{user.username}</span>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {showMobileMenu && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50"
                                            >
                                                <div className="py-1">
                                                    {userLinks.map(({ href, label, icon }) => (
                                                        <Link
                                                            key={href}
                                                            href={href}
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            <span className="mr-3">{icon}</span>
                                                            {label}
                                                        </Link>
                                                    ))}
                                                    <button
                                                        onClick={handleLogout}
                                                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                                    >
                                                        <LogOut size={18} className="mr-3" />
                                                        Déconnexion
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 ml-4">
                                <Link
                                    href="/auth/login"
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} font-medium shadow-md`}
                                >
                                    <User size={18} />
                                    <span>Connexion</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        {/* Notifications pour mobile */}
                        {user && (
                            <div className="mr-2">
                                <NotificationDropdown user={user} isScrolled={isScrolled} />
                            </div>
                        )}

                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                            aria-label="Menu"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke={isScrolled ? 'currentColor' : 'white'}
                            >
                                {showMobileMenu ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {showMobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className={`px-2 pt-2 pb-4 ${isScrolled ? 'bg-white' : 'bg-blue-600'}`}>
                            {navLinks.map(({ href, label, icon, exact }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium mb-1 ${
                                        (exact ? pathname === href : pathname.startsWith(href))
                                            ? `${isScrolled ? 'bg-blue-100 text-blue-700' : 'bg-white/20 text-white'}`
                                            : `${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`
                                    }`}
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    <span>{icon}</span>
                                    {label}
                                </Link>
                            ))}

                            {user && (
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    {userLinks.map(({ href, label, icon }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium mb-1 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                                            onClick={() => setShowMobileMenu(false)}
                                        >
                                            <span>{icon}</span>
                                            {label}
                                        </Link>
                                    ))}
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setShowMobileMenu(false);
                                        }}
                                        className={`flex w-full items-center gap-3 px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-red-600 hover:bg-red-50' : 'text-red-200 hover:bg-red-500/20'}`}
                                    >
                                        <LogOut size={18} />
                                        Déconnexion
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
