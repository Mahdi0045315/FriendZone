const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// 🔔 Créer une notification
router.post('/', async (req, res) => {
    const { type, senderId, recipientId, postId } = req.body;
    try {
        const notification = await prisma.notification.create({
            data: {
                type,
                senderId,
                recipientId,
                postId: postId || null
            },
            include: {
                post: true,
                user_notification_senderIdTouser: true,
                user_notification_recipientIdTouser: true
            }
        });
        res.status(201).json(notification);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Dans votre fichier de routes notifications.js
router.get('/:recipientId', async (req, res) => {
    try {
        const { recipientId } = req.params;

        // Ajoutez des logs pour déboguer
        console.log("Récupération des notifications pour l'utilisateur:", recipientId);

        const notifications = await prisma.notification.findMany({
            where: {
                recipientId: parseInt(recipientId)
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                user_notification_senderIdTouser: true,
                post: true
            }
        });

        res.json(notifications);
    } catch (error) {
        console.error("Erreur détaillée:", error);
        res.status(500).json({ error: error.message });
    }
});


// ✅ Marquer comme lue
router.put('/:id/read', async (req, res) => {
    const { id } = req.params;

    try {
        const updated = await prisma.notification.update({
            where: { id: parseInt(id) },
            data: { read: true }
        });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ❌ Supprimer une notification
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await prisma.notification.delete({
            where: { id: parseInt(id) }
        });
        res.json({ message: 'Notification supprimée', deleted });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// 🔢 Nombre de notifications non lues pour un utilisateur
router.get('/count/:recipientId', async (req, res) => {
    const { recipientId } = req.params;

    try {
        const count = await prisma.notification.count({
            where: {
                recipientId: parseInt(recipientId),
                read: false
            }
        });
        res.json({ unreadCount: count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
