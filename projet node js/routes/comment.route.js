const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

// CREATE un commentaire
router.post('/', async (req, res) => {
    try {
        const { content, userId, postId } = req.body;

        if (!content || !userId || !postId) {
            return res.status(400).json({ message: "Champs manquants." });
        }

        const newComment = await prisma.comment.create({
            data: { content, userId, postId },
            include: { user: true, post: true },
        });

        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la création du commentaire." });
    }
});

// READ - Obtenir tous les commentaires d'un post
router.get('/post/:postId', async (req, res) => {
    const postId = parseInt(req.params.postId);

    if (isNaN(postId)) {
        return res.status(400).json({ message: "ID post invalide." });
    }

    try {
        const comments = await prisma.comment.findMany({
            where: { postId },
            orderBy: { createdAt: 'desc' },
            include: { user: true },
        });

        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la récupération des commentaires." });
    }
});

// READ - Obtenir un commentaire par id
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: "ID commentaire invalide." });
    }

    try {
        const comment = await prisma.comment.findUnique({
            where: { id },
            include: { user: true, post: true },
        });

        if (!comment) return res.status(404).json({ message: "Commentaire non trouvé." });

        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la récupération du commentaire." });
    }
});

// UPDATE un commentaire (modification du contenu)
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { content } = req.body;

    if (isNaN(id) || !content) {
        return res.status(400).json({ message: "ID invalide ou contenu manquant." });
    }

    try {
        const updatedComment = await prisma.comment.update({
            where: { id },
            data: { content },
        });

        res.json(updatedComment);
    } catch (error) {
        console.error(error);

        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Commentaire non trouvé." });
        }

        res.status(500).json({ message: "Erreur serveur lors de la mise à jour du commentaire." });
    }
});

// DELETE un commentaire
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ message: "ID commentaire invalide." });
    }

    try {
        await prisma.comment.delete({ where: { id } });
        res.json({ message: "Commentaire supprimé avec succès." });
    } catch (error) {
        console.error(error);

        if (error.code === 'P2025') {
            return res.status(404).json({ message: "Commentaire non trouvé." });
        }

        res.status(500).json({ message: "Erreur serveur lors de la suppression du commentaire." });
    }
});

module.exports = router;
