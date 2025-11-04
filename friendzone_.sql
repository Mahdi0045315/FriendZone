-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 19 mai 2025 à 19:10
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `friendzone;`
--

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `content` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `content`, `createdAt`, `userId`, `postId`) VALUES
(4, 'wtffff mannnn bruh\n', '2025-05-19 13:31:44.546', 16, 16),
(6, 'hhh\nhhh', '2025-05-19 13:43:13.831', 15, 13),
(7, 'hh', '2025-05-19 13:44:19.947', 15, 14),
(9, 'zzzza', '2025-05-19 13:54:16.097', 15, 16),
(11, 'aa', '2025-05-19 14:06:36.540', 15, 14),
(12, 'aaa', '2025-05-19 14:06:46.688', 15, 13),
(13, 'AZZ', '2025-05-19 14:08:55.978', 15, 13),
(14, 'so bad ', '2025-05-19 14:18:01.003', 15, 16);

-- --------------------------------------------------------

--
-- Structure de la table `follow`
--

CREATE TABLE `follow` (
  `id` int(11) NOT NULL,
  `followerId` int(11) NOT NULL,
  `followingId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `follow`
--

INSERT INTO `follow` (`id`, `followerId`, `followingId`, `createdAt`) VALUES
(22, 17, 15, '2025-05-19 14:19:09.281'),
(23, 17, 16, '2025-05-19 14:19:15.034'),
(26, 16, 15, '2025-05-19 15:35:42.925'),
(27, 16, 17, '2025-05-19 16:35:18.177');

-- --------------------------------------------------------

--
-- Structure de la table `like`
--

CREATE TABLE `like` (
  `id` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `like`
--

INSERT INTO `like` (`id`, `createdAt`, `userId`, `postId`) VALUES
(24, '2025-05-19 13:23:36.142', 16, 14),
(25, '2025-05-19 13:23:41.571', 16, 13),
(26, '2025-05-19 13:48:54.266', 15, 16),
(28, '2025-05-19 13:53:44.565', 15, 13);

-- --------------------------------------------------------

--
-- Structure de la table `media`
--

CREATE TABLE `media` (
  `id` int(11) NOT NULL,
  `url` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `media`
--

INSERT INTO `media` (`id`, `url`, `type`, `createdAt`, `postId`) VALUES
(10, 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg', 'image', '2025-05-18 13:16:22.638', 13),
(11, 'https://img.freepik.com/vecteurs-premium/vector-dessin-anime-panda-mignon-illustration-du-bambou_665072-2320.jpg?semt=ais_hybrid&w=740', 'image', '2025-05-18 13:22:37.899', 14),
(12, 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630', 'image', '2025-05-18 13:22:37.899', 14),
(15, 'https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_640.jpg', 'image', '2025-05-18 21:33:50.160', 16);

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `content` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `senderId` int(11) NOT NULL,
  `recipientId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `type` varchar(191) NOT NULL,
  `read` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `recipientId` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `postId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `content` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`id`, `content`, `createdAt`, `userId`) VALUES
(13, 'Lizard', '2025-05-18 13:16:22.638', 16),
(14, 'Panda\r\n', '2025-05-18 13:22:37.899', 16),
(16, 'Favourite animal', '2025-05-18 21:33:50.160', 15);

-- --------------------------------------------------------

--
-- Structure de la table `share`
--

CREATE TABLE `share` (
  `id` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `share`
--

INSERT INTO `share` (`id`, `createdAt`, `userId`, `postId`) VALUES
(3, '2025-05-19 14:57:38.550', 16, 16),
(5, '2025-05-19 14:58:07.163', 16, 14),
(8, '2025-05-19 14:58:41.229', 16, 13);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `profilePic` varchar(191) DEFAULT NULL,
  `coverPic` varchar(191) DEFAULT NULL,
  `bio` varchar(191) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `profilePic`, `coverPic`, `bio`, `isAdmin`, `createdAt`) VALUES
(15, 'Mahdi', 'mahdi@gmail.com', '$2b$10$HcLIl8WDzg.PLlrIShvv7ek/lu4AsRdvnDY7zJ6SAgubAx5/qTmBW', 'https://cdn.pixabay.com/photo/2023/08/05/15/42/panda-8171354_640.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8mT0cBVewfNcsQcHrQThD-4bnoPN95MMOg&s', 'IT Iset Sfax', 0, '2025-05-17 20:11:35.773'),
(16, 'Wali Ahmed', 'ahmed@gmail.com', '$2b$10$x34Nzc4GfANUNC3.KAsUyufAjIm76dT8USLnBodTep9ykTWhLIusa', 'https://static-cse.canva.com/blob/964749/Formatsimages-Banniere.png', 'https://thumbor.comeup.com/unsafe/fit-in/630x354/filters:quality(90):no_upscale()/uploads/media/picture/2021-05-17/joshua-woroniecki-hxgugpd1dls-unsplash-60a268ea7a499.jpg', 'Informatique De gestion , FSEG Sfax', 0, '2025-05-17 20:18:53.232'),
(17, 'eya', 'eya@gmail.com', '$2b$10$QZft2uzBXzVEQMWVolNzMOkbQAFg4vv6a/FV9WORRVy5E2VO0vi4e', 'https://img.freepik.com/photos-gratuite/gros-plan-ara-ecarlate-partir-vue-cote-tete-agrandi_488145-3540.jpg?semt=ais_hybrid&w=740', 'https://img.freepik.com/photos-gratuite/gros-plan-ara-ecarlate-partir-vue-cote-tete-agrandi_488145-3540.jpg?semt=ais_hybrid&w=740', 'eya ta9ra 2eme fil iset l7a9ira', 0, '2025-05-18 13:48:41.447');

-- --------------------------------------------------------

--
-- Structure de la table `_postvideos`
--

CREATE TABLE `_postvideos` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('55028e7a-bcb5-4c1a-ae36-1407a5498d77', 'cbc91254b5955485e32e2956d35a433bf8ea3d081efb2755a8c0a86f72cde0e2', '2025-04-30 20:52:34.541', '20250430205230_init', NULL, NULL, '2025-04-30 20:52:30.844', 1);

-- --------------------------------------------------------

--
-- Structure de la table `_savedposts`
--

CREATE TABLE `_savedposts` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Comment_postId_fkey` (`postId`),
  ADD KEY `Comment_userId_fkey` (`userId`);

--
-- Index pour la table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Follow_followerId_followingId_key` (`followerId`,`followingId`),
  ADD KEY `Follow_followingId_fkey` (`followingId`);

--
-- Index pour la table `like`
--
ALTER TABLE `like`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Like_userId_postId_key` (`userId`,`postId`),
  ADD KEY `Like_postId_fkey` (`postId`);

--
-- Index pour la table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Media_postId_fkey` (`postId`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Message_recipientId_fkey` (`recipientId`),
  ADD KEY `Message_senderId_fkey` (`senderId`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Notification_postId_fkey` (`postId`),
  ADD KEY `Notification_recipientId_fkey` (`recipientId`),
  ADD KEY `Notification_senderId_fkey` (`senderId`);

--
-- Index pour la table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Post_userId_fkey` (`userId`);

--
-- Index pour la table `share`
--
ALTER TABLE `share`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Share_userId_postId_key` (`userId`,`postId`),
  ADD KEY `Share_postId_fkey` (`postId`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_username_key` (`username`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Index pour la table `_postvideos`
--
ALTER TABLE `_postvideos`
  ADD UNIQUE KEY `_postvideos_AB_unique` (`A`,`B`),
  ADD KEY `_postvideos_B_index` (`B`);

--
-- Index pour la table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `_savedposts`
--
ALTER TABLE `_savedposts`
  ADD UNIQUE KEY `_savedposts_AB_unique` (`A`,`B`),
  ADD KEY `_savedposts_B_index` (`B`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `follow`
--
ALTER TABLE `follow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `like`
--
ALTER TABLE `like`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `share`
--
ALTER TABLE `share`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `Comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `Follow_followerId_fkey` FOREIGN KEY (`followerId`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Follow_followingId_fkey` FOREIGN KEY (`followingId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `like`
--
ALTER TABLE `like`
  ADD CONSTRAINT `Like_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `media`
--
ALTER TABLE `media`
  ADD CONSTRAINT `Media_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `Message_recipientId_fkey` FOREIGN KEY (`recipientId`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Message_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `Notification_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `Notification_recipientId_fkey` FOREIGN KEY (`recipientId`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Notification_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `share`
--
ALTER TABLE `share`
  ADD CONSTRAINT `Share_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Share_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `_postvideos`
--
ALTER TABLE `_postvideos`
  ADD CONSTRAINT `_postvideos_A_fkey` FOREIGN KEY (`A`) REFERENCES `media` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_postvideos_B_fkey` FOREIGN KEY (`B`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `_savedposts`
--
ALTER TABLE `_savedposts`
  ADD CONSTRAINT `_savedposts_A_fkey` FOREIGN KEY (`A`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_savedposts_B_fkey` FOREIGN KEY (`B`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
