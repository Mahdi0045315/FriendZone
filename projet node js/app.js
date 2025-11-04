const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { PrismaClient } = require('./generated/prisma');


const app = express();
const prisma = new PrismaClient();

// 🔧 Middlewares globaux
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // URL du frontend
    credentials: true                // Permet les cookies de session
}));

// 💾 Gestion de session
app.use(session({
    secret: 'votreSecret', // 🔐 À sécuriser avec dotenv en prod
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,     // mettre true en HTTPS
        httpOnly: true
    }
}));


// 🏠 Test de route principale
app.get("/", (req, res) => {
    res.send("Bonjour, le serveur fonctionne !");
});

// Toutes les routes users
const userRoutes = require('./routes/user.route');
app.use('/api/users', userRoutes);

// Toutes les routes auth
const authRoutes = require('./routes/auth.route');
app.use('/api/auth', authRoutes);


// Toutes les routes post
const postRoute = require('./routes/post.route');
app.use('/api/posts', postRoute);

// Toutes les routes comment
const commentRoutes = require('./routes/comment.route');
app.use('/api/comments', commentRoutes);

// Toutes les routes like
const likeRoutes = require('./routes/like.route');
app.use('/api/likes', likeRoutes);

// Toutes les routes share
const shareRoutes = require('./routes/share.route');
app.use('/api/shares', shareRoutes);

// Toutes les routes follow
const followRoutes = require('./routes/follow.route');
app.use("/api/follow", followRoutes);


// Toutes les routes message
const messageRoutes = require('./routes/message.route');
app.use('/api/messages', messageRoutes);

// Toutes les routes notification
const notificationRoutes = require('./routes/notification.route');
app.use('/api/notifications', notificationRoutes);

const conversationRoutes = require('./routes/conversation.routes');
app.use('/api/conversation', conversationRoutes);

app.use(express.json());

// 📡 Connexion à Prisma
prisma.$connect()
    .then(() => console.log('✅ Connecté à la base de données'))
    .catch((err) => {
        console.error('❌ Erreur de connexion à la base de données :', err);
        process.exit(1);
    });

// 🚀 Démarrage du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(` Serveur démarré sur http://localhost:${PORT}`);
});