'use client';

import { useState, useEffect, useRef } from 'react';
import { Bell, X, Check, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const NotificationDropdown = ({ user, isScrolled }) => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Récupérer le nombre de notifications non lues
  const fetchUnreadCount = async () => {
    if (!user?.id) return;

    try {
      const response = await fetch(`http://localhost:3001/api/notifications/count/${user.id}`);
      if (response.ok) {
        const data = await response.json();
        setUnreadCount(data.unreadCount);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du nombre de notifications:', error);
    }
  };

  // Récupérer les notifications
  // Récupérer les notifications
  const fetchNotifications = async () => {
    if (!user?.id) return;

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/api/notifications/${user.id}`);
      if (response.ok) {
        const data = await response.json();
        setNotifications(data);
      } else {
        console.error('Erreur API:', response.status);
        // Gérer l'erreur silencieusement pour éviter de bloquer l'interface
        setNotifications([]);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des notifications:', error);
      setNotifications([]); // Initialiser avec un tableau vide en cas d'erreur
    } finally {
      setLoading(false);
    }
  };


  // Marquer une notification comme lue
  const markAsRead = async (notificationId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/notifications/${notificationId}/read`, {
        method: 'PUT',
      });
      
      if (response.ok) {
        // Mettre à jour l'état local
        setNotifications(notifications.map(notif => 
          notif.id === notificationId ? { ...notif, read: true } : notif
        ));
        
        // Mettre à jour le compteur
        fetchUnreadCount();
      }
    } catch (error) {
      console.error('Erreur lors du marquage de la notification:', error);
    }
  };

  // Supprimer une notification
  const deleteNotification = async (notificationId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/notifications/${notificationId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        // Mettre à jour l'état local
        setNotifications(notifications.filter(notif => notif.id !== notificationId));
        
        // Mettre à jour le compteur
        fetchUnreadCount();
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la notification:', error);
    }
  };

  // Charger les données au montage et quand l'utilisateur change
  useEffect(() => {
    fetchUnreadCount();
    
    // Rafraîchir le compteur toutes les 30 secondes
    const interval = setInterval(fetchUnreadCount, 30000);
    
    return () => clearInterval(interval);
  }, [user?.id]);

  // Charger les notifications quand on ouvre le dropdown
  useEffect(() => {
    if (showDropdown) {
      fetchNotifications();
    }
  }, [showDropdown]);

  // Formater la date relative
  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'À l\'instant';
    if (diffInSeconds < 3600) return `Il y a ${Math.floor(diffInSeconds / 60)} min`;
    if (diffInSeconds < 86400) return `Il y a ${Math.floor(diffInSeconds / 3600)} h`;
    if (diffInSeconds < 604800) return `Il y a ${Math.floor(diffInSeconds / 86400)} j`;
    
    return date.toLocaleDateString('fr-FR');
  };

  // Obtenir le texte de la notification en fonction du type
  const getNotificationText = (notification) => {
    const senderName = notification.user_notification_senderIdTouser?.username || 'Quelqu\'un';
    
    switch (notification.type) {
      case 'LIKE':
        return `${senderName} a aimé votre publication`;
      case 'COMMENT':
        return `${senderName} a commenté votre publication`;
      case 'FOLLOW':
        return `${senderName} a commencé à vous suivre`;
      default:
        return `Nouvelle notification de ${senderName}`;
    }
  };

  // Obtenir le lien de la notification
  const getNotificationLink = (notification) => {
    switch (notification.type) {
      case 'LIKE':
      case 'COMMENT':
        return notification.postId ? `/post/${notification.postId}` : '/';
      case 'FOLLOW':
        return `/profile/${notification.senderId}`;
      default:
        return '/';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bouton de notification */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`relative p-2 rounded-full transition-all duration-200 ${
          isScrolled 
            ? 'text-gray-700 hover:bg-gray-100' 
            : 'text-white/90 hover:bg-white/10'
        }`}
        aria-label="Notifications"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown des notifications */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 max-h-[80vh] overflow-y-auto"
          >
            <div className="p-3 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-semibold text-gray-700">Notifications</h3>
              {unreadCount > 0 && (
                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                  {unreadCount} non {unreadCount === 1 ? 'lue' : 'lues'}
                </span>
              )}
            </div>

            {loading ? (
              <div className="p-4 text-center text-gray-500">
                Chargement...
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                Aucune notification pour le moment
              </div>
            ) : (
              <div>
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors flex items-start ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    {/* Avatar de l'expéditeur */}
                    <div className="mr-3">
                      <img
                        src={notification.user_notification_senderIdTouser?.profilePic || 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    
                    {/* Contenu de la notification */}
                    <div className="flex-1 min-w-0">
                      <Link 
                        href={getNotificationLink(notification)}
                        onClick={() => !notification.read && markAsRead(notification.id)}
                        className="block"
                      >
                        <p className="text-sm text-gray-800 font-medium">
                          {getNotificationText(notification)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatRelativeTime(notification.createdAt)}
                        </p>
                      </Link>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex space-x-1 ml-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-1 text-blue-500 hover:bg-blue-100 rounded-full"
                          title="Marquer comme lu"
                        >
                          <Check size={16} />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1 text-red-500 hover:bg-red-100 rounded-full"
                        title="Supprimer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {notifications.length > 0 && (
              <div className="p-2 text-center">
                <Link 
                  href="/notifications"
                  className="text-sm text-blue-600 hover:text-blue-800"
                  onClick={() => setShowDropdown(false)}
                >
                  Voir toutes les notifications
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationDropdown;
