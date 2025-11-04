const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// 📌 Créer une publication
router.post('/', async (req, res) => {
    try {
        const user = req.session.user;
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non connecté' });
        }

        const userId = user.id;  // récupère l'id depuis la session

        const { content, media } = req.body;

        const newPost = await prisma.post.create({
            data: {
                content,
                userId,
                media_media_postIdTopost: {
                    create: media || []
                }
            },
            include: {
                media_media_postIdTopost: true
            }
        });

        res.status(201).json(newPost);
    } catch (err) {
        console.error('Erreur lors de la création du post:', err);
        res.status(500).json({ error: 'Erreur serveur lors de la création du post' });
    }
});


// 📌 Obtenir toutes les publications
// 📌 Obtenir toutes les publications avec nombre de likes
router.get('/', async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                user_post_userIdTouser: {
                    select: {
                        id: true,
                        username: true,
                        profilePic: true,
                    },
                },
                media_media_postIdTopost: true,
                like: true,  // Inclure les likes pour compter
            },
        });

        // Ajouter la propriété likesCount à chaque post
        const postsWithLikesCount = posts.map(post => ({
            ...post,
            likesCount: post.like.length,
        }));

        res.status(200).json(postsWithLikesCount);
    } catch (error) {
        console.error('Erreur lors de la récupération des posts :', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});


router.get('/user/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);
    try {
        const posts = await prisma.post.findMany({
            where: { userId },
            include: {
                media_media_postIdTopost: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        res.json(posts);
    } catch (error) {
        console.error('Erreur API /posts/user/:id', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});
// 📌 Obtenir une publication par ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await prisma.post.findUnique({
            where: { id: parseInt(id) },
            include: {
                comment: true,
                like: true,
                share: true,
                media_media_postIdTopost: true,
                user_post_userIdTouser: true
            }
        });
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 📌 Supprimer une publication
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Convertir l'ID en entier (si nécessaire, selon votre schéma)
        const postId = parseInt(id);

        // Supprimer les enregistrements dépendants (par exemple, les commentaires)
        await prisma.comment.deleteMany({
            where: { postId: postId },
        });

        // Supprimer les autres enregistrements dépendants si nécessaire (par exemple, likes)
        await prisma.like.deleteMany({
            where: { postId: postId },
        });

        await prisma.media.deleteMany({
            where: { postId: postId },
        });

        // Ensuite, supprimer le post
        const deletedPost = await prisma.post.delete({
            where: { id: postId },
        });

        res.status(200).json({ message: 'Post supprimé avec succès', deletedPost });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 📌 Modifier une publication
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    try {
        const updatedPost = await prisma.post.update({
            where: { id: parseInt(id) },
            data: { content }
        });
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.get('/post/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const likes = await prisma.like.findMany({
            where: { postId: parseInt(postId) },
            include: { user: true }
        });

        res.json(likes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
