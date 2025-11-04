const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// routes/follow.js (ou similaire)
router.post('/', async (req, res) => {
    const { followerId, followingId } = req.body;

    if (!followerId || !followingId) {
        return res.status(400).json({ error: "Missing followerId or followingId" });
    }

    try {
        // Vérifie si le follow existe déjà
        const existingFollow = await prisma.follow.findFirst({
            where: {
                followerId: parseInt(followerId),
                followingId: parseInt(followingId),
            },
        });

        if (existingFollow) {
            return res.status(200).json({ message: "Already following" });
        }

        // Crée le follow
        const follow = await prisma.follow.create({
            data: {
                followerId: parseInt(followerId),
                followingId: parseInt(followingId),
            },
        });

        res.status(201).json(follow);
    } catch (error) {
        console.error("Erreur follow:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});


// DELETE /api/follow/:followingId
router.delete('/:followingId', async (req, res) => {
    const { followingId } = req.params;
    const user = req.session.user;

    if (!user || !user.id) {
        return res.status(401).json({ message: 'Non connecté' });
    }

    try {
        const existingFollow = await prisma.follow.findUnique({
            where: {
                followerId_followingId: {
                    followerId: user.id,
                    followingId: parseInt(followingId),
                },
            },
        });

        if (!existingFollow) {
            return res.status(404).json({ message: 'Relation non trouvée' });
        }

        await prisma.follow.delete({
            where: {
                followerId_followingId: {
                    followerId: user.id,
                    followingId: parseInt(followingId),
                },
            },
        });

        res.status(200).json({ message: 'Désabonnement effectué' });
    } catch (error) {
        console.error('Erreur lors du désabonnement :', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});


// Obtenir le nombre de followers d'un utilisateur
router.get('/:userId/followers/count', async (req, res) => {
    const userId = parseInt(req.params.userId);

    try {
        const count = await prisma.follow.count({
            where: {
                followingId: userId,
            },
        });
        res.json({ followersCount: count });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur lors du comptage des followers.' });
    }
});



// Obtenir le nombre de followings d'un utilisateur
router.get('/:userId/following/count', async (req, res) => {
    const userId = parseInt(req.params.userId);

    try {
        const count = await prisma.follow.count({
            where: {
                followerId: userId,
            },
        });
        res.json({ followingCount: count });
    } catch (error) {
        console.error('Erreur:', error);
        res.status(500).json({ error: 'Erreur lors du comptage des followings.' });
    }
});

router.get("/following/:userId", async (req, res) => {
    const userId = parseInt(req.params.userId);

    try {
        const followings = await prisma.follow.findMany({
            where: {
                followerId: userId,
            },
            select: {
                followingId: true,
            },
        });

        // On retourne uniquement les IDs
        const followingIds = followings.map((f) => f.followingId);
        res.json(followingIds);
    } catch (error) {
        console.error("Erreur serveur GET /following/:userId:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});
router.get("/followings/:userId", async (req, res) => {
    const userId = parseInt(req.params.userId);

    try {
        const followings = await prisma.follow.findMany({
            where: {
                followerId: userId,
            },
            select: {
                user_follow_followingIdTouser: {
                    select: {
                        id: true,
                        username: true,
                        profilePic: true, // ajoute les autres champs si nécessaire
                    },
                },
            },
        });

        const followingUsers = followings.map((f) => f.user_follow_followingIdTouser);
        res.json(followingUsers);
    } catch (error) {
        console.error("Erreur serveur GET /following/:userId:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// GET /api/follow/followers/:userId - Récupère tous les followers d'un utilisateur
// Obtenir les followers d'un utilisateur (ceux qui suivent l'utilisateur )
router.get("/followers/:userId", async (req, res) => {
    const userId = parseInt(req.params.userId);

    try {
        const followers = await prisma.follow.findMany({
            where: {
                followingId: userId, // L'utilisateur est suivi par ces personnes
            },
            select: {
                user_follow_followerIdTouser: {
                    select: {
                        id: true,
                        username: true,
                        profilePic: true,
                    },
                },
            },
        });

        const followerUsers = followers.map((f) => f.user_follow_followerIdTouser);
        res.json(followerUsers);
    } catch (error) {
        console.error("Erreur serveur GET /followers/:userId:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

module.exports = router;



