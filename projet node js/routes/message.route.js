const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// 📩 Envoyer un message
router.post('/', async (req, res) => {
    try {
        const { senderId, recipientId, content } = req.body;

        if (!senderId || !recipientId || !content) {
            return res.status(400).json({ message: "senderId, recipientId et content sont requis" });
        }

        // Vérifier si sender suit recipient
        const isFollowing = await prisma.follow.findFirst({
            where: {
                followerId: senderId,
                followingId: recipientId,
            }
        });

        if (!isFollowing) {
            return res.status(403).json({ message: "Vous ne pouvez envoyer un message qu'aux utilisateurs que vous suivez." });
        }

        // Créer le message
        const message = await prisma.message.create({
            data: {
                content,
                senderId,
                recipientId,
            }
        });

        res.status(201).json({ message: "Message envoyé avec succès", data: message });
    } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});


//récupérer conversation (sans middleware)
router.get('/conversations/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);
    if (isNaN(userId)) {
        return res.status(400).json({ message: "userId invalide" });
    }

    try {
        // 1. Trouver tous les messages envoyés ou reçus par userId
        const messages = await prisma.message.findMany({
            where: {
                OR: [
                    { senderId: userId },
                    { recipientId: userId }
                ]
            },
            orderBy: { createdAt: 'asc' }
        });

        if (messages.length === 0) {
            return res.status(200).json({
                message: "Aucune conversation trouvée.",
                userId,
                interlocutors: [],
                conversations: {}
            });
        }

        // 2. Extraire les interlocuteurs
        const interlocutorSet = new Set();
        messages.forEach(msg => {
            if (msg.senderId !== userId) interlocutorSet.add(msg.senderId);
            if (msg.recipientId !== userId) interlocutorSet.add(msg.recipientId);
        });
        const interlocutorIds = Array.from(interlocutorSet);

        if (interlocutorIds.length === 0) {
            return res.status(200).json({
                message: "Aucun interlocuteur trouvé.",
                userId,
                interlocutors: [],
                conversations: {}
            });
        }

        // 3. Récupérer les infos des interlocuteurs
        const interlocutors = await prisma.user.findMany({
            where: { id: { in: interlocutorIds } },
            select: {
                id: true,
                username: true,
                profilePic: true,
                bio: true
            }
        });

        // 4. Grouper les messages par interlocuteur
        const conversations = {};
        interlocutorIds.forEach(id => {
            conversations[id] = messages.filter(
                msg =>
                    (msg.senderId === userId && msg.recipientId === id) ||
                    (msg.senderId === id && msg.recipientId === userId)
            );
        });

        res.status(200).json({ userId, interlocutors, conversations });

    } catch (error) {
        console.error("Erreur récupération conversations:", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// ❌ Supprimer un message
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await prisma.message.delete({
            where: { id: parseInt(id) }
        });

        res.status(200).json({ message: 'Message supprimé', deleted });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
