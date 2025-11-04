const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// 📌 Ajouter un like
router.post('/', async (req, res) => {
    const { userId, postId } = req.body;

    if (!userId || !postId) {
        return res.status(400).json({ error: 'userId et postId sont requis' });
    }

    try {
        // Vérifie si le like existe déjà via la clé composite
        const existingLike = await prisma.like.findUnique({
            where: {
                userId_postId: {
                    userId,
                    postId,
                },
            },
        });

        if (existingLike) {
            return res.status(400).json({ message: 'Le post est déjà liké par cet utilisateur.' });
        }

        // Crée un nouveau like
        const newLike = await prisma.like.create({
            data: {
                userId,
                postId,
            },
        });

        return res.status(201).json({ message: 'Post liké avec succès.', like: newLike });

    } catch (error) {
        console.error('❌ Erreur lors du like :', error);
        return res.status(500).json({ error: 'Erreur serveur. Veuillez réessayer plus tard.' });
    }
});



// 📌 Supprimer un like
// DELETE /api/likes
router.delete('/', async (req, res) => {
    const { userId, postId } = req.body;

    if (!userId || !postId) {
        return res.status(400).json({ error: 'userId et postId sont requis' });
    }

    try {
        // Vérifie si le like existe
        const existingLike = await prisma.like.findUnique({
            where: {
                userId_postId: {
                    userId,
                    postId,
                },
            },
        });

        if (!existingLike) {
            return res.status(404).json({ message: 'Ce like n’existe pas.' });
        }

        // Supprime le like
        await prisma.like.delete({
            where: {
                userId_postId: {
                    userId,
                    postId,
                },
            },
        });

        return res.status(200).json({ message: 'Like retiré avec succès.' });

    } catch (error) {
        console.error('❌ Erreur lors du unlike :', error);
        return res.status(500).json({ error: 'Erreur serveur.' });
    }
});

// 📌 Récupérer tous les likes d’un post

router.get('/users/:id/likes', async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const likes = await prisma.like.findMany({
            where: { userId },
            select: { postId: true }, // on veut juste les postId
        });
        res.status(200).json(likes);
    } catch (error) {
        console.error('Erreur lors de la récupération des likes :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// 📌 Récupérer les posts likés par un utilisateur
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const likes = await prisma.like.findMany({
            where: { userId: parseInt(userId) },
            include: { post: true }
        });

        res.json(likes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
