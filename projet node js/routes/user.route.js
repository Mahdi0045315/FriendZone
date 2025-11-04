const express = require('express');
const router = express.Router();
const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();


router.get('/all-except-me', async (req, res) => {
    try {
        const currentUserId = parseInt(req.query.currentUserId);
        if (isNaN(currentUserId)) {
            return res.status(400).json({ message: "currentUserId is required and must be a number" });
        }

        // Rechercher tous les utilisateurs sauf celui connecté
        const users = await prisma.user.findMany({
            where: {
                id: {
                    not: currentUserId,  // Exclure l'utilisateur connecté
                },
            },
            select: {
                id: true,
                username: true,
                email: true,
                profilePic: true,
                bio: true,
                createdAt: true,
            },
        });

        res.json(users);
    } catch (error) {
        console.error('Erreur API users/all-except-me:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});// Middleware session auth
const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ success: false, message: "Non autorisé" });
    }
};

// Get All Users
router.get('/', isAuthenticated, async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true, username: true, email: true,
                profilePic: true, coverPic: true, bio: true,
                createdAt: true, updatedAt: true
            }
        });

        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error("Erreur:", error);
        res.status(500).json({ success: false, message: "Erreur serveur" });
    }
});

// Get User by ID
router.get('/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        if (isNaN(userId)) {
            return res.status(400).json({ message: 'ID invalide' });
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.json(user);
    } catch (error) {
        console.error('Erreur dans GET /:id :', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});



// Update User
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, bio, profilePic, coverPic } = req.body;

    try {
        // Vérifier si l'utilisateur existe
        const existingUser = await prisma.user.findUnique({ where: { id: parseInt(id) } });

        if (!existingUser) {
            return res.status(404).json({ message: 'Utilisateur introuvable.' });
        }

        // Mettre à jour les champs fournis
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: {
                username,
                email,
                bio,
                profilePic,
                coverPic,
            },
        });

        res.json({ message: 'Profil mis à jour avec succès.', user: updatedUser });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du profil :', error);
        res.status(500).json({ message: 'Erreur serveur.' });
    }
});

// Delete User
router.delete('/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params;

    try {
        // Supprimer l'utilisateur
        await prisma.user.delete({ where: { id: Number(id) } });

        // Détruire la session s'il s'agit de l'utilisateur connecté
        if (req.session.user.id === Number(id)) {
            req.session.destroy(err => {
                if (err) {
                    console.error("Erreur lors de la déconnexion :", err);
                    return res.status(500).json({ success: false, message: "Compte supprimé, mais échec de la déconnexion" });
                }
                return res.status(200).json({ success: true, message: "Votre compte a été supprimé avec succès" });
            });
        } else {
            // Si un admin supprime un autre utilisateur
            res.status(200).json({ success: true, message: "Utilisateur supprimé avec succès" });
        }
    } catch (error) {
        console.error("Erreur suppression:", error);
        res.status(500).json({ success: false, message: "Erreur lors de la suppression de l'utilisateur" });
    }
});


module.exports = router;
