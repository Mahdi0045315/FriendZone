const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma'); // utilise '@prisma/client' classique
const prisma = new PrismaClient();

// Créer une conversation vide (optionnel si tu utilises conversation entre users)
router.post('/', async (req, res) => {
    try {
        const conversation = await prisma.conversation.create({
            data: {},
        });
        res.status(201).json(conversation);
    } catch (error) {
        console.error("Erreur création conversation:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Ajouter un message à une conversation
router.post('/:conversationId/messages', async (req, res) => {
    const conversationId = parseInt(req.params.conversationId);
    const { content, senderId, recipientId } = req.body;

    if (!content || !senderId || !recipientId) {
        return res.status(400).json({ error: "Champs requis manquants" });
    }

    try {
        // Vérifie que la conversation existe
        const conversation = await prisma.conversation.findUnique({
            where: { id: conversationId },
        });
        if (!conversation) {
            return res.status(404).json({ error: "Conversation introuvable" });
        }

        const message = await prisma.message.create({
            data: {
                content,
                senderId,
                recipientId,
                conversationId,
            },
            include: {
                user_message_senderIdTouser: { select: { id: true, username: true, profilePic: true } },
                user_message_recipientIdTouser: { select: { id: true, username: true, profilePic: true } },
            },
        });

        res.status(201).json(message);
    } catch (error) {
        console.error("Erreur ajout message:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Obtenir toutes les conversations d’un utilisateur avec leurs messages et participants
router.get('/user/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);
    if (!userId) {
        return res.status(400).json({ error: "userId requis" });
    }

    try {
        const conversations = await prisma.conversation.findMany({
            where: {
                OR: [
                    { user1Id: userId },
                    { user2Id: userId },
                ],
            },
            orderBy: { createdAt: 'desc' },
            include: {
                user1: { select: { id: true, username: true, profilePic: true } },
                user2: { select: { id: true, username: true, profilePic: true } },
                messages: {
                    orderBy: { createdAt: 'asc' },
                    include: {
                        user_message_senderIdTouser: { select: { id: true, username: true, profilePic: true } },
                        user_message_recipientIdTouser: { select: { id: true, username: true, profilePic: true } },
                    },
                },
            },
        });

        res.json(conversations);
    } catch (error) {
        console.error("Erreur récupération conversations:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Obtenir une conversation par ID (avec messages et participants)
router.get('/:conversationId', async (req, res) => {
    const conversationId = parseInt(req.params.conversationId);

    try {
        const conversation = await prisma.conversation.findUnique({
            where: { id: conversationId },
            include: {
                user1: { select: { id: true, username: true, profilePic: true } },
                user2: { select: { id: true, username: true, profilePic: true } },
                messages: {
                    orderBy: { createdAt: 'asc' },
                    include: {
                        user_message_senderIdTouser: { select: { id: true, username: true, profilePic: true } },
                        user_message_recipientIdTouser: { select: { id: true, username: true, profilePic: true } },
                    },
                },
            },
        });

        if (!conversation) {
            return res.status(404).json({ error: "Conversation introuvable" });
        }

        res.json(conversation);
    } catch (error) {
        console.error("Erreur récupération conversation:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Obtenir ou créer une conversation entre deux utilisateurs
router.post('/between', async (req, res) => {
    const { userId1, userId2 } = req.body;
    if (!userId1 || !userId2) {
        return res.status(400).json({ error: "userId1 et userId2 requis" });
    }

    try {
        // Cherche une conversation entre ces deux utilisateurs
        let conversation = await prisma.conversation.findFirst({
            where: {
                OR: [
                    { user1Id: userId1, user2Id: userId2 },
                    { user1Id: userId2, user2Id: userId1 },
                ],
            },
            include: {
                user1: { select: { id: true, username: true, profilePic: true } },
                user2: { select: { id: true, username: true, profilePic: true } },
                messages: {
                    orderBy: { createdAt: 'asc' },
                    include: {
                        user_message_senderIdTouser: { select: { id: true, username: true, profilePic: true } },
                        user_message_recipientIdTouser: { select: { id: true, username: true, profilePic: true } },
                    },
                },
            },
        });

        if (!conversation) {
            conversation = await prisma.conversation.create({
                data: {
                    user1Id: userId1,
                    user2Id: userId2,
                },
                include: {
                    user1: { select: { id: true, username: true, profilePic: true } },
                    user2: { select: { id: true, username: true, profilePic: true } },
                    messages: true,
                },
            });
        }

        res.json(conversation);
    } catch (error) {
        console.error("Erreur GET/CREATE conversation between:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});
// Dans votre fichier d'API (ex: conversations.js)
router.post('/send', async (req, res) => {
    const { conversationId, content, senderId, recipientId } = req.body;

    // Validation des données
    if (!conversationId || !content || !senderId || !recipientId) {
        return res.status(400).json({
            error: "Tous les champs sont requis",
            details: {
                received: req.body,
                required: ["conversationId", "content", "senderId", "recipientId"]
            }
        });
    }

    try {
        // Vérifie que la conversation existe
        const conversation = await prisma.conversation.findUnique({
            where: { id: parseInt(conversationId) },
        });

        if (!conversation) {
            return res.status(404).json({ error: "Conversation introuvable" });
        }

        const message = await prisma.message.create({
            data: {
                content,
                senderId: parseInt(senderId),
                recipientId: parseInt(recipientId),
                conversationId: parseInt(conversationId),
            },
            include: {
                user_message_senderIdTouser: true,
                user_message_recipientIdTouser: true,
            },
        });

        res.status(201).json(message);
    } catch (error) {
        console.error("Erreur envoi message:", error);
        res.status(500).json({
            error: "Erreur serveur",
            details: error.message
        });
    }
});


module.exports = router;
