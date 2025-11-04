const express = require('express');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const router = express.Router();

// 🔐 REGISTER
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email déjà utilisé' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        req.session.user = { id: user.id, username: user.username, email: user.email};
        res.json({ user: req.session.user });
    } catch (err) {
        console.error('Erreur REGISTER :', err);
        res.status(500).json({ error: 'Erreur serveur lors de l’inscription' });
    }
});

// 🔐 LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
        }

        req.session.user = { id: user.id, username: user.username, email: user.email};
        res.json({ message: 'Connecté', user: req.session.user });
    } catch (err) {
        console.error('Erreur LOGIN :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la connexion' });
    }
});

// 🔐 LOGOUT
router.post('/logout', (req, res) => {
    try {
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.json({ message: 'Déconnecté' });
        });
    } catch (err) {
        console.error('Erreur LOGOUT :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la déconnexion' });
    }
});

// 🔐 SESSION (whoami)
/*router.get('/session', (req, res) => {
    try {
        if (req.session.user) {
            res.json({ user: req.session.user });
        } else {
            res.status(401).json({ error: 'Non connecté' });
        }
    } catch (err) {
        console.error('Erreur SESSION :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la récupération de session' });
    }
});

module.exports = router;*/

// 🔐 SESSION (whoami)
router.get('/session', async (req, res) => {
    try {
        const sessionUser = req.session.user;

        if (!sessionUser) {
            return res.status(401).json({ error: 'Non connecté' });
        }

        const user = await prisma.user.findUnique({
            where: { id: sessionUser.id },
            select: {
                id: true,
                username: true,
                email: true,
                profilePic: true,
                coverPic: true,
                bio: true,
                createdAt: true
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'Utilisateur introuvable' });
        }

        res.json({ user });

    } catch (err) {
        console.error('Erreur SESSION :', err);
        res.status(500).json({ error: 'Erreur serveur lors de la récupération de session' });
    }
});

module.exports = router;

